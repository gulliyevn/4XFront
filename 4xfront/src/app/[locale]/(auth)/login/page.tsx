import styles from './page.module.scss'
import { LoginForm } from '@/components/auth/LoginForm/LoginForm'
// import { DemoToggle } from '@/components/DemoToggle'
import { getTranslations } from 'next-intl/server';

export default async function LoginPage() {
  const t = await getTranslations('login');
  const translations = {
    signInToAccount: t('signInToAccount'),
    welcomeBack: t('welcomeBack'),
    emailAddress: t('emailAddress'),
    enterEmail: t('enterEmail'),
    password: t('password'),
    enterPassword: t('enterPassword'),
    rememberMe: t('rememberMe'),
    forgotPassword: t('forgotPassword'),
    signIn: t('signIn'),
    or: t('or'),
    tryDemoMode: t('tryDemoMode'),
    loginSuccessTitle: t('loginSuccessTitle'),
    loginSuccessMsg: t('loginSuccessMsg'),
    loginFailedTitle: t('loginFailedTitle'),
    loginFailedMsg: t('loginFailedMsg'),
    //new
    dontHaveAccount: t('dontHaveAccount'),
    pendingLogin: t('pendingLogin'),
    signUp: t('signUp')

  }

  return (
    <div className={styles['login-page']}>
      {/* Background decoration */}
      <div className={styles['bg-decoration']}>
        <div className={styles['circle-top']} />
        <div className={styles['circle-bottom']} />
      </div>
      
      <div className={styles['page-content']}>
        <div className={styles['center-box']}>
          <h2 className={styles['title']}>{t('title')}</h2>
          <p className={styles['subtitle']}>
            {t('signInToAccount')}
          </p>
        </div>

        <div className={styles['form-box']}>
          <div className={styles['demo-toggle']}>
            {/* <DemoToggle /> */}
          </div>
          <LoginForm translations={translations} />
        </div>
      </div>
    </div>
  )
}
