import '../../globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import { locales } from '@/i18n/request';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

// If loading a variable font, you don't need to specify the font weight
const font = Open_Sans({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  if (!locales.includes(locale as unknown as never)) {
    return notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={`${font.className} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
