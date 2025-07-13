import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

const namespaces = [
    'login',
    'metadata',
    'charts',
    'dashboard',
    'forgot-password',
    'faq',
    'footer',
    'navbar',
    'register',
    'index',
    'auth-layout',
    'links',
    'input-validation',
    'main',
    'navigation',
    'api-answer',
]

export default getRequestConfig(async ({ requestLocale }) => {
    // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
    //eslint-deisable-next-line @typescript-eslint/no-explicit-any
    const messages: { [namespace: string]: any } = {}
    for (const ns of namespaces) {
        messages[ns] = (await import(`../locales/${locale}/${ns}.json`)).default
    }
    return {
        locale,
        messages,
    }
})
