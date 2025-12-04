import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans, Baumans } from "next/font/google";
import Footer from "@/components/custom/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SectionSpine, SocialSpine, TopSpine } from "@/components/custom/section-spine";
import { MobileMenu } from "@/components/custom/mobile-menu";
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, getTranslations } from "next-intl/server";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const baumans = Baumans({
  variable: "--font-baumans",
  subsets: ["latin"],
  weight: ["400"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

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
  if (!routing.locales.includes(locale as "nl" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${baumans.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
              <SectionSpine />
              <SocialSpine />
              <TopSpine />
              <MobileMenu />
              <div className="flex min-h-dvh flex-col px-4 lg:px-48">
                <main className="flex-1 font-noto">
                  {children}
                </main>
                <Footer />
              </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
