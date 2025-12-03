"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { calculateEndTime } from "@/lib/booking-calendar/utils/form-utils";
import { bookingSchema, BookingFormData } from "./schemas";
import { MeetingDetails } from "./meeting-details";
import { ContactSection } from "./contact-section";
import { GuestsSection } from "./guests-section";
import { CalcomBookingRequest, CalcomBookingResponse } from "@/types/booking";

interface BookingFormProps {
  selectedSlot: string;
  eventTypeId: string;
  eventLength: number; // in minutes
  userTimezone: string; // User's selected timezone
  onSuccess: (booking: CalcomBookingResponse) => void;
  onBack: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedSlot,
  eventTypeId,
  eventLength,
  userTimezone,
  onSuccess,
  onBack,
}) => {
  const [loading, setLoading] = useState(false);
  const [guests, setGuests] = useState<string[]>([]);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      notes: "",
      guests: [],
      referralSource: undefined,
    },
  });

  const handleSubmit = async (data: BookingFormData) => {
    setLoading(true);

    try {
      const endTime = calculateEndTime(selectedSlot, eventLength);

      const bookingData: CalcomBookingRequest = {
        eventTypeId,
        start: selectedSlot,
        end: endTime,
        attendee: {
          name: data.name,
          email: data.email,
          timeZone: userTimezone,
        },
        metadata: {
          ...(data.referralSource && { referralSource: data.referralSource }),
          ...(data.notes && { notes: data.notes }),
        },
        bookingFieldsResponses: {
          ...(data.referralSource && { referral_source: data.referralSource }),
          ...(data.notes && { notes: data.notes }),
        },
        guests: guests.length > 0 ? guests : undefined,
      };

      const response = await fetch("/api/booking-calendar/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create booking");
      }

      const result = await response.json();
      const booking = result.data || result;
      onSuccess(booking);
    } catch (error) {
      console.error("Booking error:", error);
      form.setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Failed to book meeting. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Meeting Details */}
      <div className="mb-8">
        <MeetingDetails
          selectedSlot={selectedSlot}
          eventLength={eventLength}
          userTimezone={userTimezone}
        />
      </div>

      {/* Booking Form */}
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Contact Information */}
        <ContactSection control={form.control} />

        {/* Guests */}
        <GuestsSection guests={guests} onGuestsChange={setGuests} />

        {/* Error Display */}
        {form.formState.errors.root && (
          <Alert className="border-red-500/20 bg-red-500/10">
            <AlertDescription className="text-red-400">
              {form.formState.errors.root.message}
            </AlertDescription>
          </Alert>
        )}

        {/* Form Actions */}
        <div className="flex gap-3 z-20">
          <Button
            variant="outline"
            size='lg'
            onClick={onBack}
            className="flex-1 cursor-pointer h-12"
            >
            Back
          </Button>
          <Button
            disabled={loading}
            size='lg'
            className="flex-1 cursor-pointer h-12">
            {loading ? "Confirming..." : "Confirm"}
          </Button>
        </div>
      </form>
    </div>
  );
};
