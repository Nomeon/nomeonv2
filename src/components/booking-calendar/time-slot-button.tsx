"use client";

import React from "react";
import type { CalcomSlot } from "@/types/booking";
import { formatTime } from "@/lib/booking-calendar/utils/date-utils";
import { Button } from "../ui/button";

interface TimeSlotButtonProps {
  slot: CalcomSlot;
  timeFormat: "12h" | "24h";
  timezone: string;
  onSlotSelect: (slotTime: string) => void;
}

export const TimeSlotButton: React.FC<TimeSlotButtonProps> = ({
  slot,
  timeFormat,
  timezone,
  onSlotSelect,
}) => {
  return (
    <Button
      onClick={() => onSlotSelect(slot.time)}
      className="w-full"
      variant="outline"
    >
      {formatTime(slot.time, timeFormat, timezone)}
    </Button>
  );
};
