import { useTranslations } from 'next-intl';

export const AuthLayoutFooter = () => {
  const t = useTranslations('links');
  return (
    <footer className="p-6 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {t('copyright')}
      </p>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="text-xs text-gray-400 hover:text-[#98b5a4] transition-colors">
          {t('privacyPolicy')}
        </a>
        <a href="/terms" className="text-xs text-gray-400 hover:text-[#98b5a4] transition-colors">
          {t('termsOfService')}
        </a>
        <a href="/support" className="text-xs text-gray-400 hover:text-[#98b5a4] transition-colors">
          {t('support')}
        </a>
      </div>
    </footer>
  );
};
