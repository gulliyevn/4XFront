import React from 'react'
import { cn } from '@/lib/utils'
import { AuthLayoutFooter } from './AuthLayoutFooter'
import { AuthLayoutTopBar } from './AuthLayoutTopBar'
import { AuthMobileBackground } from './AuthMobileBackground'
import { AuthFormContainer } from './AuthFormContainer'
import { useTranslations } from 'next-intl';
import { AuthHeroSection } from './AuthHeroSection'

interface AuthLayoutProps {
  children: React.ReactNode
}


export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}) => {
  const t = useTranslations('auth-layout');
  const features = t.raw('hero.features');
  const stats = t.raw('hero.stats');

  return (
    <div className={cn(
      'min-h-screen flex flex-col',
      'bg-gradient-to-br from-indigo-500 via-blue-300 to-purple-300',
      'dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900',
      'relative overflow-hidden w-full'
    )}>
      <AuthLayoutTopBar />
      <div className="flex-1 flex w-full">
        {/* (lg и выше) Левая Hero секция */}
        <div className="hidden lg:flex flex-1 items-center justify-end pr-16">
          <AuthHeroSection
            headline={
              t.rich('hero.headline', {
                confidence: (chunks) => <span className="text-[#98b5a4]">{chunks}</span>
              })
            }
            subtitle={t('subtitle')}
            stats={stats}
            features={features}
          />
        </div>
        {/* Правая часть — форма */}
        <div className="flex-1 flex items-center justify-center relative w-full lg:w-1/2 xl:w-1/3">
          <AuthMobileBackground />
          <div className="w-full max-w-md mx-auto bg-white/90 dark:bg-slate-900/95 rounded-3xl shadow-2xl flex flex-col justify-center">
            <AuthFormContainer>
              {children}
            </AuthFormContainer>
          </div>
        </div>
      </div>
      {/* Footer — всегда снизу, на всю ширину */}
      <AuthLayoutFooter />
    </div>
  )
}

export default AuthLayout 