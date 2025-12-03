import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { isValidEmail } from '@/lib/booking-calendar/utils/form-utils';

interface GuestsSectionProps {
  guests: string[];
  onGuestsChange: (guests: string[]) => void;
}

export const GuestsSection: React.FC<GuestsSectionProps> = ({
  guests,
  onGuestsChange,
}) => {
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');
  const [guestEmailError, setGuestEmailError] = useState('');

  const addGuest = () => {
    const trimmedEmail = guestEmail.trim();
    setGuestEmailError('');

    if (!trimmedEmail) {
      setGuestEmailError('Please enter an email address');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setGuestEmailError('Please enter a valid email address');
      return;
    }

    // Check for case-insensitive duplicates
    const isDuplicate = guests.some(
      (existingEmail) =>
        existingEmail.toLowerCase() === trimmedEmail.toLowerCase()
    );

    if (isDuplicate) {
      setGuestEmailError('This email has already been added');
      return;
    }

    onGuestsChange([...guests, trimmedEmail]);
    setGuestEmail('');
  };

  const removeGuest = (email: string) => {
    onGuestsChange(guests.filter((g) => g !== email));
  };

  return (
    <FieldGroup className='gap-4'>
      <div className="flex items-center justify-between">
        <FieldLabel className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Add guests (optional)
        </FieldLabel>
        <Button
          type="button"
          variant="link"
          size="sm"
          onClick={() => setShowGuestInput(!showGuestInput)}
          className=""
        >
          <UserPlus className="h-4 w-4 mr-1" />
          Add guests
        </Button>
      </div>

      {/* Existing Guests */}
      {guests.length > 0 && (
        <div className="space-y-0">
          {guests.map((email, index) => (
            <div key={index} className="">
              <div className="flex items-center justify-between p-3">
                <span className="text-sm ">{email}</span>
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  onClick={() => removeGuest(email)}
                  className="text-destructive h-auto p-1"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Guest Input */}
      {showGuestInput && (
        <Field data-invalid={!!guestEmailError}>
          <div className="flex gap-2">
            <Input
              id="guest-email"
              type="email"
              value={guestEmail}
              onChange={(e) => {
                setGuestEmail(e.target.value);
                setGuestEmailError('');
              }}
              placeholder="Guest email address"
              className='rounded-none border-border'
              aria-invalid={!!guestEmailError}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addGuest();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={addGuest}
            >
              Add
            </Button>
          </div>
          <FieldError>{guestEmailError}</FieldError>
        </Field>
      )}
    </FieldGroup>
  );
};