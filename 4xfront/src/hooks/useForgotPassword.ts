import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuthStore } from '@/stores'

export type ForgotPasswordTranslations = {
    invalidEmail: string
    requiredEmail: string
    requiredCode: string
    invalidCode: string
    requiredNewPassword: string
    passwordTooShort: string
    passwordUppercase: string
    passwordLowercase: string
    passwordNumber: string
    passwordSpecial: string
    requiredConfirmPassword: string
    passwordsDoNotMatch: string
    serverError: string
    resetFailedMsg: string
}

type EmailData = {
    email: string
}

type OtpData = {
    otp: string
}

type PasswordData = {
    password: string
    confirmPassword: string
}

interface UseForgotPasswordParams {
    translations: ForgotPasswordTranslations
    onSuccess?: () => void
}

export function useForgotPassword({ translations, onSuccess }: UseForgotPasswordParams) {
    const [currentStep, setCurrentStep] = useState(1)
    const [otpSent, setOtpSent] = useState(false)
    const [resetComplete, setResetComplete] = useState(false)

    const emailSchema = z.object({
        email: z.string().nonempty(translations.requiredEmail).email(translations.invalidEmail),
    })

    const otpSchema = z.object({
        otp: z.string().nonempty(translations.requiredCode).length(6, translations.invalidCode),
    })

    const passwordSchema = z
        .object({
            password: z
                .string()
                .min(8, translations.passwordTooShort)
                .regex(/[A-Z]/, translations.passwordUppercase)
                .regex(/[a-z]/, translations.passwordLowercase)
                .regex(/[0-9]/, translations.passwordNumber)
                .regex(/[^A-Za-z0-9]/, translations.passwordSpecial),
            confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: translations.passwordsDoNotMatch,
            path: ['confirmPassword'],
        })

    // === React Hook Form useForm (каждая форма со своей схемой) ===
    const emailForm = useForm<EmailData>({
        resolver: zodResolver(emailSchema),
        mode: 'onChange',
    })

    const otpForm = useForm<OtpData>({
        resolver: zodResolver(otpSchema),
        mode: 'onChange',
    })

    const passwordForm = useForm<PasswordData>({
        resolver: zodResolver(passwordSchema),
        mode: 'onChange',
    })
    const { requestPasswordReset, confirmPasswordReset, isLoading, error } = useAuthStore()

    async function onEmailSubmit(data: EmailData) {
        console.log(data)
        try {
            await requestPasswordReset(data)
            setOtpSent(true)
            setCurrentStep(2)
        } catch (err) {
            console.log(err)
            // setError(translations.serverError);
        }
    }

    async function onOtpSubmit(data: OtpData) {
        console.log(data)
        try {
            // await api.verifyResetOtp(email, data.otp)
            setCurrentStep(3)
        } catch (err) {
            console.log(err)
        }
    }

    async function onPasswordSubmit(data: PasswordData) {
        console.log(data)
        try {
            // await api.resetPassword(email, data.password)
            setResetComplete(true)
            onSuccess?.()
        } catch (err) {
            console.log(err)
        }
    }

    async function resendOtp() {
        try {
            // await api.resendResetOtp(email);
            setOtpSent(true)
        } catch (err) {
            console.log(err)
        }
    }

    function goBack() {
        setCurrentStep((prev) => Math.max(1, prev - 1))
        // setError(null);
    }

    return {
        currentStep,
        otpSent,
        resetComplete,
        isLoading,
        error,
        emailForm,
        otpForm,
        passwordForm,
        onEmailSubmit,
        onOtpSubmit,
        onPasswordSubmit,
        resendOtp,
        goBack,
    }
}
