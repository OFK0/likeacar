import { getRequestConfig } from 'next-intl/server';
import set from 'lodash/set';

export const locales = ['en', 'de'];
export const defaultLocale = 'de';
export const localePrefix = 'as-needed';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  const localeFile = (await import(`@/locales/${locale}.json`)).default;

  const messages = Object.entries(localeFile).reduce((acc, [key, value]) => set(acc, key, value), {});

  return {
    locale,
    messages,
    onError: () => ({}),
    getMessageFallback: ({ key }) => key,
  };
});
