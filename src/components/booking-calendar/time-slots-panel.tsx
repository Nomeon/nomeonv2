"use client";

import React from "react";
import type { CalcomSlot } from "@/types/booking";
import { TimeSlotButton } from "./time-slot-button";

interface TimeSlotsPanelProps {
  selectedDate: Date | null;
  availableSlots: CalcomSlot[];
  loading: boolean;
  timeFormat: "24h";
  userTimezone: string;
  onSlotSelect: (slotTime: string) => void;
}

export const TimeSlotsPanel: React.FC<TimeSlotsPanelProps> = ({
  selectedDate,
  availableSlots,
  loading,
  timeFormat,
  userTimezone,
  onSlotSelect,
}) => {

  return (
    <div className="w-full border-t lg:border-t-0">
      {/* Time Slots */}
      <div className="relative">
        {/* Scroll container with visible scrollbar and height limit */}
        <div className="scrollbar-thin max-h-96 overflow-y-auto px-6 pb-4">
          <div className="space-y-2 pt-1">
            {!selectedDate ? (
              <p className="text-sm text-foreground text-center">
                Please select a date to see available times
              </p>
            ) : loading ? (
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-9 animate-pulse bg-muted"
                  />
                ))}
              </div>
            ) : availableSlots.length === 0 ? (
              <p className="text-sm text-foreground text-center">
                No available times for this date
              </p>
            ) : (
              availableSlots.map((slot) => (
                <TimeSlotButton
                  key={slot.time}
                  slot={slot}
                  timeFormat={timeFormat}
                  timezone={userTimezone}
                  onSlotSelect={onSlotSelect}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
