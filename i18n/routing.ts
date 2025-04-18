import { defineRouting } from 'next-intl/routing';

export const LOCALE = ['en', 'cn'] as const;

export const routing = defineRouting({
  locales: LOCALE,

  defaultLocale: 'en'
});
