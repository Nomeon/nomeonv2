'use client';

import { useLocaleToggle } from '@/hooks/use-locale-toggle';

export function LocaleButtonDesktop() {
  const { locale, toggleLocale } = useLocaleToggle();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="h-5 w-5 text-primary cursor-pointer hover:text-foreground text-center align-middle font-baumans text-md mb-0.5"
    >
      {locale === 'en' ? 'NL' : 'EN'}
    </button>
  );
}
