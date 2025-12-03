'use client';

import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import type { CalcomBookingResponse } from '@/types/booking';

interface RescheduleConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
  booking: CalcomBookingResponse | null;
  newSlot: string | null;
  userTimezone: string;
}

export const RescheduleConfirmationModal: React.FC<
  RescheduleConfirmationModalProps
> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  booking,
  newSlot,
  userTimezone,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent
        className="rounded-none"
        aria-describedby="reschedule-description"
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="font-baumans text-xl font-medium">
            Confirm Reschedule
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="space-y-4 px-6 pb-2">
          <div id="reschedule-description" className="font-noto">
            Are you sure you want to reschedule your meeting?
          </div>

          {booking && newSlot && (
            <div className="space-y-2 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 rounded px-2 py-1 text-center bg-muted">
                  <span className="text-xs font-bold text-destructive">FROM</span>
                </div>
                <div className="flex-1 text-sm">
                  <span className="font-medium">
                    {new Date(
                      booking.start || booking.startTime || ''
                    ).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      timeZone: userTimezone,
                    })}
                  </span>
                  <span className="mx-2 ">•</span>
                  <span className="">
                    {new Date(
                      booking.start || booking.startTime || ''
                    ).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      timeZone: userTimezone,
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 rounded bg-muted px-2 py-1 text-center">
                  <span className="text-xs font-medium text-green-400">TO</span>
                </div>
                <div className="flex-1 text-sm">
                  <span className="font-medium">
                    {new Date(newSlot).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      timeZone: userTimezone,
                    })}
                  </span>
                  <span className="mx-2 ">•</span>
                  <span className="">
                    {new Date(newSlot).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      timeZone: userTimezone,
                    })}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground">
            Your original meeting time will be replaced and you&apos;ll receive
            a new confirmation email.
          </div>
        </div>

        <AlertDialogFooter>
          <div className="flex w-full gap-3">
            <Button
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? 'Rescheduling...' : 'Confirm Reschedule'}
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
