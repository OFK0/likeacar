import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales, defaultLocale } from './i18n/request';

export default createMiddleware({ locales, defaultLocale, localePrefix });

export const config = {
  unstable_allowDynamic: ['**/node_modules/lodash/**/*.js'],
  matcher: ['/', '/(de|en)/:path*'],
};
