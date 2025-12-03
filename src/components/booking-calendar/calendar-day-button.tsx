"use client";

import React from "react";
import type { CalendarDay } from "@/lib/booking-calendar/utils/date-utils";

interface CalendarDayButtonProps {
  day: CalendarDay;
  onDateSelect: (date: Date) => void;
}

export const CalendarDayButton: React.FC<CalendarDayButtonProps> = ({
  day,
  onDateSelect,
}) => {
  return (
    <button
      onClick={() => !day.disabled && onDateSelect(day.date)}
      disabled={day.disabled}
      className={`relative aspect-square p-2 text-sm font-baumans transition-all ${
        day.isSelected
          ? "bg-primary text-primary-foreground ring-1"
          : day.isToday
          ? "bg-accent text-accent-foreground ring-1 ring-primary"
          : day.disabled
          ? "cursor-not-allowed text-neutral-600"
          : day.hasSlots
          ? "text-foreground hover:bg-accent"
          : "text-muted-foreground hover:bg-muted"
      } ${!day.isCurrentMonth ? "opacity-40" : ""}`}>
      {day.day}
      {day.hasSlots && day.isCurrentMonth && !day.disabled && (
        <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-green-400" />
      )}
    </button>
  );
};
