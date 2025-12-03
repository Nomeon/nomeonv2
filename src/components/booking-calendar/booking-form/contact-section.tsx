import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactSectionProps<T extends FieldValues> {
  control: Control<T>;
}

export const ContactSection = <T extends FieldValues>({ control }: ContactSectionProps<T>) => {
  const { field: nameField, fieldState: nameFieldState } = useController({
    control,
    name: 'name' as Path<T>,
  });

  const { field: emailField, fieldState: emailFieldState } = useController({
    control,
    name: 'email' as Path<T>,
  });

  const { field: notesField, fieldState: notesFieldState } = useController({
    control,
    name: 'notes' as Path<T>,
  });

  return (
    <FieldGroup>
      <FieldLabel className="font-medium">
        Contact Information
      </FieldLabel>

      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Name Field */}
        <Field data-invalid={!!nameFieldState.error}>
          <FieldLabel>Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            aria-invalid={!!nameFieldState.error}
            {...nameField}
            className="rounded-none border-border"
          />
          <FieldError>{nameFieldState.error?.message}</FieldError>
        </Field>

        {/* Email Field */}
        <Field data-invalid={!!emailFieldState.error}>
          <FieldLabel>Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!emailFieldState.error}
            {...emailField}
            className="rounded-none border-border"
          />
          <FieldError>{emailFieldState.error?.message}</FieldError>
        </Field>
      </div>

      {/* Message/Notes Field */}
      <Field data-invalid={!!notesFieldState.error}>
        <FieldLabel>Message</FieldLabel>
        <Textarea
          id="notes"
                  placeholder="A few details about your project will help me prepare better for our call"
                  className="min-h-[120px] resize-vertical rounded-none border-border"
                  {...notesField}
                />
        <FieldError>{notesFieldState.error?.message}</FieldError>
      </Field>
    </FieldGroup>
  );
};