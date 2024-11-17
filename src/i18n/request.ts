import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { set } from 'lodash';

export const locales = ['en', 'de'];
export const defaultLocale = 'de';
export const localePrefix = 'as-needed';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const localeFile = (await import(`@/locales/${locale}.json`)).default;

  const messages = Object.entries(localeFile).reduce((acc, [key, value]) => set(acc, key, value), {});

  return {
    locale,
    messages,
  };
});
