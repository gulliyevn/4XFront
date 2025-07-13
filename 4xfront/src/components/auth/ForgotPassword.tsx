'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Input, Alert, Card, CardBody } from '@/components/ui'
import { ForgotPasswordTranslations, useForgotPassword } from '@/hooks/useForgotPassword'
import { useFormState } from 'react-hook-form'

interface ForgotPasswordProps {
    onSuccess?: () => void
    className?: string
    translations: {
        forgotPasswordTitle: string
        email: string
        submit: string
        backToLogin: string
        resetPassword: string
        step1: string
        step2: string
        step3: string
        emailAddress: string
        sendResetCode: string
        verificationCode: string
        verifyCode: string
        newPassword: string
        confirmNewPassword: string
        reset: string
        resetSuccessTitle: string
        resetSuccessMsg: string
        signIn: string
        resetFailedTitle: string
        resetFailedMsg: string
        invalidEmail: string
        requiredEmail: string
        requiredCode: string
        invalidCode: string
        requiredNewPassword: string
        passwordTooShort: string
        requiredConfirmPassword: string
        passwordsDoNotMatch: string
        tooManyAttempts: string
        emailNotFound: string
        codeSent: string
        codeResend: string
        codeResent: string
        waitBeforeResend: string
        serverError: string
        resetCodeSentInfo: string
        sending: string
        verifying: string
        resetting: string
        checkYourEmailTitle: string
        checkYourEmailDesc: string
        didNotReceive: string
        back: string
        rememberPassword: string
        passwordUppercase: string
        passwordLowercase: string
        passwordNumber: string
        passwordSpecial: string
    }
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSuccess, className, translations }) => {
    const {
        currentStep,
        // email,
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
    } = useForgotPassword({ translations: translations as ForgotPasswordTranslations, onSuccess })
    const emailFormIsValid = useFormState({ control: emailForm.control }).isValid

    if (resetComplete) {
        return (
            <Card className={className}>
                <CardBody className="p-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{translations.resetSuccessTitle}</h2>
                        <p className="text-gray-600 mb-6">{translations.resetSuccessMsg}</p>
                        <Link href="/login">
                            <Button variant="primary" size="lg">
                                {translations.signIn}
                            </Button>
                        </Link>
                    </motion.div>
                </CardBody>
            </Card>
        )
    }

    return (
        <Card className={className}>
            <CardBody className="p-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{translations.resetPassword}</h1>
                        <p className="text-gray-600">
                            {currentStep === 1 && translations.step1}
                            {currentStep === 2 && translations.step2}
                            {currentStep === 3 && translations.step3}
                        </p>
                    </div>

                    {/* Step Indicator */}
                    <div className="flex items-center justify-center mb-8">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div
                                    className={`
                  flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                  ${currentStep >= step ? 'bg-[#98b5a4] text-white' : 'bg-gray-200 text-gray-600'}
                `}>
                                    {currentStep > step ? '✓' : step}
                                </div>
                                {step < 3 && (
                                    <div className={`w-12 h-0.5 mx-2 ${currentStep > step ? 'bg-[#98b5a4]' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Error Alert */}
                    {error && (
                        <Alert type="error" title={translations.serverError} className="mb-6" dismissible>
                            {error}
                        </Alert>
                    )}

                    <AnimatePresence mode="wait">
                        {/* Step 1: Email Input */}
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}>
                                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
                                    <Input
                                        {...emailForm.register('email')}
                                        type="email"
                                        label={translations.emailAddress}
                                        placeholder={translations.step1}
                                        error={emailForm.formState.errors.email?.message}
                                        prefixIcon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                />
                                            </svg>
                                        }
                                        fullWidth
                                        autoComplete="email"
                                    />

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        fullWidth
                                        loading={isLoading}
                                        disabled={!emailFormIsValid || isLoading}>
                                        {isLoading ? translations.sending : translations.sendResetCode}
                                    </Button>
                                </form>
                            </motion.div>
                        )}

                        {/* Step 2: OTP Verification */}
                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}>
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {translations.checkYourEmailTitle}
                                    </h3>
                                    <p className="text-gray-600">
                                        {translations.checkYourEmailDesc}
                                        <br />
                                        {/* <strong>{email}</strong> */}
                                    </p>
                                </div>

                                {otpSent && (
                                    <Alert type="info" className="mb-6">
                                        {translations.resetCodeSentInfo}
                                    </Alert>
                                )}

                                <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-6">
                                    <Input
                                        {...otpForm.register('otp')}
                                        type="text"
                                        label={translations.verificationCode}
                                        placeholder={translations.verificationCode}
                                        error={otpForm.formState.errors.otp?.message}
                                        maxLength={6}
                                        className="text-center text-2xl tracking-widest"
                                        fullWidth
                                    />

                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="text-sm text-[#98b5a4] hover:text-[#89a396] transition-colors"
                                            onClick={resendOtp}>
                                            {translations.didNotReceive}
                                        </button>
                                    </div>

                                    <div className="flex space-x-4">
                                        <Button type="button" variant="outline" size="lg" fullWidth onClick={goBack}>
                                            {translations.back}
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            loading={isLoading}
                                            disabled={!otpForm.formState.isValid || isLoading}>
                                            {isLoading ? translations.verifying : translations.verifyCode}
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* Step 3: New Password */}
                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}>
                                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                                    <Input
                                        {...passwordForm.register('password')}
                                        type="password"
                                        label={translations.newPassword}
                                        placeholder={translations.step3}
                                        error={passwordForm.formState.errors.password?.message}
                                        prefixIcon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                />
                                            </svg>
                                        }
                                        fullWidth
                                    />

                                    <Input
                                        {...passwordForm.register('confirmPassword')}
                                        type="password"
                                        label={translations.confirmNewPassword}
                                        placeholder={translations.confirmNewPassword}
                                        error={passwordForm.formState.errors.confirmPassword?.message}
                                        prefixIcon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        }
                                        fullWidth
                                    />

                                    <div className="flex space-x-4">
                                        <Button type="button" variant="outline" size="lg" fullWidth onClick={goBack}>
                                            {translations.back}
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            loading={isLoading}
                                            disabled={!passwordForm.formState.isValid || isLoading}>
                                            {isLoading ? translations.resetting : translations.resetPassword}
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Back to Login Link */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            {translations.rememberPassword}{' '}
                            <Link href="/login" className="font-medium text-[#98b5a4] hover:text-[#89a396] transition-colors">
                                {translations.signIn}
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </CardBody>
        </Card>
    )
}

export default ForgotPassword
