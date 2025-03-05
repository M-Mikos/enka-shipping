import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "./layoutComponents/header/Header";
import Footer from "./layoutComponents/footer/Footer";
import ClientProviders from "./layoutComponents/ClientProviders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enka Spedycja",
};

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
      <body className="overflow-x-hidden">
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
