"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MONTHS } from "@/lib/booking-calendar/utils/date-utils";
import { Button } from "../ui/button";

interface CalendarNavigationProps {
  currentDate: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export const CalendarNavigation: React.FC<CalendarNavigationProps> = ({
  currentDate,
  onPreviousMonth,
  onNextMonth,
}) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="font-baumans text-xl">
        {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h2>
      <div className="flex gap-1">
        <Button variant="outline" size="icon" onClick={onPreviousMonth} aria-label="Previous month">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onNextMonth} aria-label="Next month">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
