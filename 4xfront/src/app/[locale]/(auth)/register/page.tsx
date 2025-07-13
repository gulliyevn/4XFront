import { RegisterForm } from '@/components/auth/RegisterForm'
// import { DemoToggle } from '@/components/DemoToggle'
import { getTranslations } from 'next-intl/server';


export default async function RegisterPage() {
  const t = await getTranslations('register');

  const translations = {
    backToHome: t('backToHome'),
    createAccount: t('createAccount'),
    joinTraders: t('joinTraders'),
    firstName: t('firstName'),
    lastName: t('lastName'),
    emailAddress: t('emailAddress'),
    password: t('password'),
    confirmPassword: t('confirmPassword'),
    createStrongPassword: t('createStrongPassword'),
    acceptTerms: t('acceptTerms'),
    acceptPrivacy: t('acceptPrivacy'),
    signUp: t('signUp'),
    alreadyHaveAccount: t('alreadyHaveAccount'),
    registrationSuccessful: t('registrationSuccessful'),
    welcomeToPlatform: t('welcomeToPlatform'),
    checkEmail: t('checkEmail'),
    continueToDashboard: t('continueToDashboard'),
    passwordMismatch: t('passwordMismatch'),
    passwordsDoNotMatch: t('passwordsDoNotMatch'),
    termsRequired: t('termsRequired'),
    pleaseAcceptTerms: t('pleaseAcceptTerms'),
    accountCreated: t('accountCreated'),
    welcomeToAnalytics: t('welcomeToAnalytics'),
    registrationFailed: t('registrationFailed'),
    failedToCreateAccount: t('failedToCreateAccount'),
    firstNamePlaceholder: t('firstNamePlaceholder'),
    lastNamePlaceholder: t('lastNamePlaceholder'),
    emailPlaceholder: t('emailPlaceholder'),
    phoneLabel: t('phoneLabel'),
    country: t('country'),
    countryLabel: t('countryLabel'),
    birthday: t('birthday'),
    continue: t('continue'),
    password_strength: t('password_strength'),
    back: t('back'),
    check_email: t('check_email'),
    codeSend: t('codeSend'),
    codeSent: t('codeSent'),
    marketingEmail: t('marketingEmail'),
    optional: t('optional'),
    haveAnAccount: t('haveAnAccount'),
    signIn: t('signIn'),
    creatingAccount: t('creatingAccount'),
    verifyEmail: t('verifyEmail'),
    resendCode: t('resendCode'),
    codeLabel: t('codeLabel'),
    codePlaceholder: t('codePlaceholder')
  }

  return (
    <div className="min-h-screen flex items-center justify-center  relative overflow-hidden">
      {/* Декор размытым фоном */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] bg-indigo-600 opacity-20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-40 right-1/2 translate-x-1/2 w-[48rem] h-[48rem] bg-purple-400 opacity-20 blur-[120px] rounded-full" />
      </div>
      {/* Контейнер формы */}
      <div className="z-10 w-full max-w-md bg-white/90 dark:bg-slate-900/95 rounded-3xl shadow-2xl px-8 py-10 backdrop-blur-md border border-white/30 dark:border-slate-700 flex flex-col items-center">
        {/* <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white text-center drop-shadow-lg">
          {translations.createAccount || 'Create Account'}
        </h2>
        <p className="mb-8 text-base text-gray-700 dark:text-gray-300 text-center font-medium">
          {translations.joinTraders || 'Join traders from all over the world'}
        </p> */}
        {/* Вот здесь - сама форма */}
        <RegisterForm translations={translations} className='min-w-md'/>
      </div>
    </div>
  )
}