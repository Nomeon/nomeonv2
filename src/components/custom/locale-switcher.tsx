"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

function useLocaleSwitch() {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const changeLocale = () => {
    const nextLocale = locale === "en" ? "nl" : "en";
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return { locale, changeLocale };
}

export function LocaleSwitcher() {
  const { locale, changeLocale } = useLocaleSwitch();

  return (
    <button
      type="button"
      onClick={changeLocale}
      aria-label="Toggle language"
      className="h-5 w-5 text-primary cursor-pointer hover:text-foreground text-center align-middle font-baumans text-md mb-0.5"
    >
      {locale === "en" ? "NL" : "EN"}
    </button>
  );
}

export function LocaleSwitcherMobile() {
  const { locale, changeLocale } = useLocaleSwitch();

  return (
    <Button onClick={changeLocale} className="w-full flex justify-between mt-4">
      <span>Language</span>
      <div className="flex items-center gap-2">
        <Image
          className="h-4 w-4 mb-1"
          width={16}
          height={16}
          alt={locale === "en" ? "Nederlandse vlag" : "English flag"}
          src={locale === "en" ? "/images/nl.svg" : "/images/en.svg"}
        />
        <span className="tabular-nums">
          {locale === "en" ? "Nederlands" : "English"}
        </span>
      </div>
    </Button>
  );
}
