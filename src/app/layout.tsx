import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans, Baumans } from "next/font/google";
// import Header from "@/components/custom/header"; // optional now
import Footer from "@/components/custom/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SectionSpine, SocialSpine, TopSpine } from "@/components/custom/section-spine";
import { MobileMenu } from "@/components/custom/mobile-menu";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const baumans = Baumans({
  variable: "--font-baumans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nomeon",
  description: "Second iteration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          {/* Global layout wrapper */}
          <div className="relative min-h-screen">
            <SectionSpine />
            <SocialSpine />
            <TopSpine />
            <MobileMenu />
            <div className="flex min-h-dvh flex-col px-4 lg:px-48">
              <main className="flex-1 font-noto pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
