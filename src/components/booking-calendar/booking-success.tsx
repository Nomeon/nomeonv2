"use client";

import {
  CheckCircle,
  Calendar,
  Clock,
  User,
  Mail,
  ExternalLink,
  RotateCcw,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CalcomBookingResponse } from "@/types/booking";

interface BookingSuccessProps {
  booking: CalcomBookingResponse;
  userTimezone: string; // User's selected timezone
  onReschedule: () => void;
  onCancel: () => void;
  isRescheduled: boolean;
}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({
  booking,
  userTimezone,
  onReschedule,
  onCancel,
  isRescheduled,
}) => {
  // Format the booking details in user's selected timezone
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);

    // Validate the date
    if (isNaN(date.getTime())) {
      console.error("Invalid date string:", dateString);
      return {
        dateStr: "Invalid Date",
        timeStr: "Invalid Time",
      };
    }

    // Use user's selected timezone for consistent formatting
    const dateStr = date.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: userTimezone,
    });
    const timeStr = date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: userTimezone,
    });
    return { dateStr, timeStr };
  };

  const { dateStr, timeStr } = formatDateTime(booking.start);
  const attendee = booking.attendees?.[0];

  // Generate calendar links
  const generateCalendarLinks = () => {
    const startDate = new Date(booking.start);
    const endDate = new Date(booking.end);

    // Validate dates before formatting
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error("Invalid date values:", {
        start: booking.start,
        end: booking.end,
      });
      return {
        google: "#",
        outlook: "#",
        apple: "#",
      };
    }

    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const title = encodeURIComponent(booking.title || "Meeting");
    const startFormatted = formatDateForCalendar(startDate);
    const endFormatted = formatDateForCalendar(endDate);

    // Create VCALENDAR content for Apple Calendar
    const vcalendarContent = `BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      DTSTART:${startFormatted}
      DTEND:${endFormatted}
      SUMMARY:${booking.title || "Meeting"}
      END:VEVENT
      END:VCALENDAR`;

    return {
      google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startFormatted}/${endFormatted}`,
      outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}`,
      apple: `data:text/calendar;charset=utf8,${encodeURIComponent(
        vcalendarContent
      )}`,
    };
  };

  const calendarLinks = generateCalendarLinks();

  return (
    <div className="">
      <div className="text-center">
        {/* Success Message */}
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-baumans">
            {isRescheduled ? "Meeting rescheduled!" : "Meeting booked!"}
          </h2>
          <div className="p-4">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <p className="mb-8 text-sm">
          You&apos;ll receive a confirmation email with meeting details shortly.
        </p>

        {/* Meeting Details Card */}
        <div className="mb-8 border p-6 text-left">
          <h3 className="mb-4 text-lg font-semibold">
            {booking.title || "Meeting Details"}
          </h3>

          <div className="space-y-3 text-sm">
            {/* Date & Time */}
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-primary" />
              <div className="text-left">
                <p className="">{dateStr}</p>
                <p className="text-muted-foreground">{timeStr}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary" />
              <p className="">
                {booking.duration ||
                  Math.round(
                    (new Date(booking.end).getTime() -
                      new Date(booking.start).getTime()) /
                      (1000 * 60)
                  )}{" "}
                minutes
              </p>
            </div>

            {/* Attendee */}
            {attendee && (
              <>
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-primary" />
                  <p className="">{attendee.name}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <p className="">{attendee.email}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Add to Calendar */}
        <div className="mb-6">
          <h4 className="mb-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Add to Calendar
          </h4>
          <div className="flex gap-2">
            <Button asChild>
              <a
                href={calendarLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                >
                Google
                <ExternalLink className="h-2 w-2 -mt-1" />
              </a>
            </Button>

            <Button asChild>
              <a
                href={calendarLinks.outlook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                Outlook
                <ExternalLink className="h-2 w-2 -mt-1" />
              </a>
            </Button>

            <Button asChild>
              <a
                href={calendarLinks.apple}
                download={`${booking.title || "meeting"}.ics`}
                className="flex-1"
              >
                Apple
                <ExternalLink className="h-2 w-2 -mt-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {/* Primary Actions */}
          <div className="flex gap-3">
            <Button
              onClick={onReschedule}
              variant='outline'
              className="flex flex-1">
              <RotateCcw className="h-2 w-2 -mt-1" />
              Reschedule
            </Button>
            <Button
              onClick={onCancel}
              variant='outline'
              className="flex flex-1">
              <X className="h-2 w-2 -mt-1" />
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
