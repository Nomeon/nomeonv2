// useLocaleToggle.ts
'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {Locale} from 'next-intl';

export function useLocaleToggle() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function toggleLocale() {
    const nextLocale: Locale = locale === 'en' ? 'nl' : 'en';

    startTransition(() => {
      router.replace(
        // @ts-expect-error same reason as next-intl docs
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return { locale, toggleLocale, isPending };
}
