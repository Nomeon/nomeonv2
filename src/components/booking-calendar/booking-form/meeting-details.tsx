import { formatDateTime } from '@/lib/booking-calendar/utils/form-utils';

interface MeetingDetailsProps {
  selectedSlot: string;
  eventLength: number;
  userTimezone: string;
}

export const MeetingDetails: React.FC<MeetingDetailsProps> = ({
  selectedSlot,
  eventLength,
  userTimezone,
}) => {
  const { dateStr, timeStr } = formatDateTime(selectedSlot, userTimezone);
  const endTimeStr = formatDateTime(calculateEndTime(selectedSlot, eventLength), userTimezone).timeStr;

  function calculateEndTime(startTime: string, durationMinutes: number): string {
    const startDate = new Date(startTime);
    const endDate = new Date(startDate.getTime() + durationMinutes * 60000);
    return endDate.toISOString();
  }

  return (
    <div>
      <div>
        <div className="text-xl pb-2 font-baumans text-foreground">Meeting details</div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-foreground">Date:</span>
          <span className="text-foreground">{dateStr}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground">Time:</span>
          <span className="text-foreground">{timeStr} - {endTimeStr}</span>
        </div>
      </div>
    </div>
  );
};