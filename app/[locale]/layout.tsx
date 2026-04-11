import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Unbounded } from "next/font/google";
import Header from "@/components/Header/Header";
import ScrollTop from "@/components/ui/ScrollTop";
import { SmoothScroll } from "@/components/ui/SmoothScroll/SmoothScroll";
import GsapInit from "@/components/ui/Gsap/Gsap";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ua" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const htmlLang = locale === "ua" ? "uk" : "en";

  return (
    <html
      lang={htmlLang}
      suppressHydrationWarning
      className={`${inter.variable} ${unbounded.variable} antialiased`}
    >
      <link rel="shortcut icon" href="/images/fav.png" type="image/x-icon" />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <SmoothScroll>
            <GsapInit />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <ScrollTop />
          <Toaster position="bottom-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
