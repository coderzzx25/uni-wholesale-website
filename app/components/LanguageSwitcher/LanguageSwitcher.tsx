// src/components/LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { LOCALE } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale(); // 获取当前语言
  const router = useRouter();
  const pathname = usePathname(); // 获取当前路径（不带语言前缀）

  // 切换语言
  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={(e) => switchLanguage(e.target.value)}>
      {LOCALE.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
