import type { Metadata } from "next";
import "./globals.css";
import { Inter, Unbounded } from "next/font/google";
import Header from "@/components/Header/Header";
import ScrollTop from "@/components/ui/ScrollTop";
import { SmoothScroll } from "@/components/ui/SmoothScroll/SmoothScroll";
import GsapInit from "@/components/ui/Gsap/Gsap";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SETAGRO — Внесення безводного аміаку",
  description:
    "Компанія SETAGRO надає послуги з внесення безводного аміаку як азотного добрива на полях України, Румунії, Болгарії та Молдови.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`${inter.variable} ${unbounded.variable} antialiased`}
    >
      <link rel="shortcut icon" href="/images/fav.png" type="image/x-icon" />
      <body>
        <Header />
        <SmoothScroll>
          <GsapInit />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <ScrollTop />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
