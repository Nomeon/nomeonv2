import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans, Baumans } from "next/font/google";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import LogoFrame from "@/components/custom/logo-frame";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`${notoSans.variable} ${baumans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            {/* <LogoFrame /> */}
            <main className="font-noto">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
