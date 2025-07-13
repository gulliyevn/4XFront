
import { ForgotPassword } from '@/components/auth/ForgotPassword'
import { getTranslations } from 'next-intl/server';

export default async function ForgotPasswordPage() {
  const [t, tVal] = await Promise.all([
    getTranslations('forgot-password'),
    getTranslations('input-validation')
  ]);

  const translations = {
    forgotPasswordTitle: t('forgotPasswordTitle'),
    email: t('email'),
    submit: t('submit'),
    backToLogin: t('backToLogin'),
    resetPassword: t('resetPassword'),
    step1: t('step1'),
    step2: t('step2'),
    step3: t('step3'),
    emailAddress: t('emailAddress'),
    sendResetCode: t('sendResetCode'),
    verificationCode: t('verificationCode'),
    verifyCode: t('verifyCode'),
    newPassword: t('newPassword'),
    confirmNewPassword: t('confirmNewPassword'),
    reset: t('reset'),
    resetSuccessTitle: t('resetSuccessTitle'),
    resetSuccessMsg: t('resetSuccessMsg'),
    signIn: t('signIn'),
    resetFailedTitle: t('resetFailedTitle'),
    //new
    resetFailedMsg: t('resetFailedMsg'),
    invalidEmail: t('invalidEmail'),
    requiredEmail: t('requiredEmail'),
    requiredCode: t('requiredCode'),
    invalidCode: t('invalidCode'),
    requiredNewPassword: t('requiredNewPassword'),
    passwordTooShort: t('passwordTooShort'),
    requiredConfirmPassword: t('requiredConfirmPassword'),
    passwordsDoNotMatch: t('passwordsDoNotMatch'),
    tooManyAttempts: t('tooManyAttempts'),
    emailNotFound: t('emailNotFound'),
    codeSent: t('codeSent'),
    codeResend: t('codeResend'),
    codeResent: t('codeResent'),
    waitBeforeResend: t('waitBeforeResend'),
    serverError: t('serverError'),
    resetCodeSentInfo: t('resetCodeSentInfo'),
    sending: t('sending'),
    verifying: t('verifying'),
    resetting: t('resetting'),
    checkYourEmailTitle: t('checkYourEmailTitle'),
    checkYourEmailDesc: t('checkYourEmailDesc'),
    didNotReceive: t('didNotReceive'),
    back: t('back'),
    rememberPassword: t('rememberPassword'),
    passwordUppercase: tVal('passwordUppercase'),
    passwordLowercase: tVal('passwordLowercase'),
    passwordNumber: tVal('passwordNumber'),
    passwordSpecial: tVal('passwordSpecial')
  }

  return <ForgotPassword translations={translations} />
} 