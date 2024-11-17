import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { defaultLocale, localePrefix, locales } from './request';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: localePrefix,
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
