import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export type Language = 'en' | 'tr' | 'ru';

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Language;

  const setLanguage = (language: Language) => {
    router.push(pathname, { locale: language });
  };

  return {
    language: locale,
    setLanguage,
  };
}
