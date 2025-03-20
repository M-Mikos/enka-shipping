import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "./_components/layout-components/header/Header";
import Footer from "./_components/layout-components/footer/Footer";
import ClientProviders from "./_components/layout-components/ClientProviders";
import { Metadata } from "next";
import { generateDefaultMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import clsx from "clsx";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Global.Metadata");
  return generateDefaultMetadata(t);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // All i18n messages
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx("overflow-x-hidden", inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
