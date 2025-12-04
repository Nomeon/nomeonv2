'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLocaleToggle } from '@/hooks/use-locale-toggle';

export function LocaleButtonMobile() {
  const { locale, toggleLocale } = useLocaleToggle();

  return (
    <Button
      onClick={toggleLocale}
      className="w-full flex justify-between mt-4"
    >
      <span>Language</span>
      <div className="flex items-center gap-2">
        <Image
          className="h-4 w-4 mb-1"
          width={16}
          height={16}
          alt={locale === 'en' ? 'Nederlandse vlag' : 'English flag'}
          src={locale === 'en' ? '/images/nl.svg' : '/images/en.svg'}
        />
        <span className="tabular-nums">
          {locale === 'en' ? 'Nederlands' : 'English'}
        </span>
      </div>
    </Button>
  );
}
