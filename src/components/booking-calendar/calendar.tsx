"use client";

import { useState, useEffect } from "react";
import { CalendarGrid } from "./calendar-grid";
import { TimeSlotsPanel } from "./time-slots-panel";
import { useCalendarSlots } from "@/lib/booking-calendar/hooks/use-calendar-slots";
import { useIntersectionObserver } from "@/lib/booking-calendar/hooks/use-intersection-observer";

interface CalendarProps {
  eventTypeId: string;
  onSlotSelect: (slot: string) => void;
  userTimezone: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  eventTypeId,
  onSlotSelect,
  userTimezone,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Intersection observer to detect when calendar becomes visible
  const [calendarRef, hasIntersected] = useIntersectionObserver(
    {
      rootMargin: "500px",
      triggerOnce: true,
    }
  );

  // Use custom hook for slots data - only enabled when visible
  const { monthSlots, availableSlots, loading, fetchMonthSlots, fetchSlots } =
    useCalendarSlots(eventTypeId, hasIntersected);

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    fetchSlots(date);
  };

  // Navigation
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  // Extract year and month for dependency tracking
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Fetch month slots when calendar becomes visible or month changes
  useEffect(() => {
    if (hasIntersected) {
      fetchMonthSlots(currentDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasIntersected, currentYear, currentMonth]);

  // Auto-select today's date when month slots are loaded
  useEffect(() => {
    if (Object.keys(monthSlots).length > 0 && !selectedDate) {
      const today = new Date();
      setSelectedDate(today);
      fetchSlots(today);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthSlots]);

  // Refresh data when timezone changes
  useEffect(() => {
    if (userTimezone) {
      // Fetch fresh data for the current month
      fetchMonthSlots(currentDate);
      // If there's a selected date, refetch slots for that date in the new timezone
      if (selectedDate) {
        fetchSlots(selectedDate);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTimezone]);

  return (
    <div
      ref={calendarRef}
      className="">

      {/* Calendar and Time Slots */}
      <div className="flex flex-col lg:flex-row pt-6">
        {/* Calendar Grid */}
        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          monthSlots={monthSlots}
          onDateSelect={handleDateSelect}
          onPreviousMonth={goToPreviousMonth}
          onNextMonth={goToNextMonth}
        />

        {/* Time Slots Panel */}
        <TimeSlotsPanel
          selectedDate={selectedDate}
          availableSlots={availableSlots}
          loading={loading}
          timeFormat={"24h"}
          userTimezone={userTimezone}
          onSlotSelect={onSlotSelect}
        />
      </div>
    </div>
  );
};
