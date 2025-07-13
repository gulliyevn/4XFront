import { z } from 'zod'

export const getLoginSchema = (translations: {
    emailRequired: string
    emailInvalid: string
    passwordRequired: string
    passwordMinLength: string
}) =>
    z.object({
        email: z.string().min(1, translations.emailRequired).email(translations.emailInvalid),
        password: z.string().min(1, translations.passwordRequired).min(6, translations.passwordMinLength),
        rememberMe: z.boolean().optional(),
    })
