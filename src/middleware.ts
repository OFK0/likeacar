import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  unstable_allowDynamic: ['**/node_modules/lodash/**/*.js'],
  matcher: ['/', '/(de|en)/:path*'],
};
