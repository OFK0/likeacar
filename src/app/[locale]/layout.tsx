import type { Metadata } from 'next';
import '../../globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// If loading a variable font, you don't need to specify the font weight
const hostGroteskFont = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LikeAcar',
  description: 'Herzlich willkommen bei Like a car.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as unknown as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={`${hostGroteskFont.className} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
