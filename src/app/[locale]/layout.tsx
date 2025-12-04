import "./globals.css";
import { Noto_Sans, Baumans } from "next/font/google";
import Footer from "@/components/custom/footer";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SectionSpine,
  SocialSpine,
  TopSpine,
} from "@/components/custom/section-spine";
import { MobileMenu } from "@/components/custom/mobile-menu";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const baumans = Baumans({
  variable: "--font-baumans",
  subsets: ["latin"],
  weight: ["400"],
});



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">
) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    authors: [{ name: "Stijn Nijhuis", url: "https://nomeon.nl" }],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>

      <body
        className={`${notoSans.variable} ${baumans.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <SectionSpine />
            <SocialSpine />
            <TopSpine />
            <MobileMenu />
            <div className="flex min-h-dvh flex-col px-4 lg:px-48">
              <main className="flex-1 font-noto">{children}</main>
              <Footer />
            </div>
            <Toaster
              toastOptions={{
                className:
                  "!shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] dark:!shadow-[2px_2px_0_0_rgba(255,255,255,0.8)] !bg-primary !text-primary-foreground  !rounded-none !border !border-foreground font-baumans !text-base",
                descriptionClassName:
                  "font-noto !text-primary-foreground/90 !text-xs",
              }}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
