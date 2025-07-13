'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LoginCredentials } from '@/types/auth'
import { Button, Input, Card, CardBody } from '@/components/ui'
// import { DEMO_MODE } from '@/lib/env'
// import { demoCredentials } from '@/lib/mockData'
import { AlertSection } from './AlertSection'
import { SocialButtons } from './SocialButtons'
import { useLogin } from '@/hooks/useLogin'
import { useTranslations } from 'next-intl'
import { resolveApiMessage } from '@/utils/resolveApiAnswer'
import { getLoginSchema } from './getLoginSchema'

interface LoginFormProps {
    onSuccess?: () => void
    className?: string
    translations: {
        signInToAccount: string
        emailAddress: string
        enterEmail: string
        password: string
        enterPassword: string
        rememberMe: string
        forgotPassword: string
        signIn: string
        or: string
        tryDemoMode: string
        loginSuccessTitle: string
        loginSuccessMsg: string
        loginFailedTitle: string
        loginFailedMsg: string
        welcomeBack: string
        //new
        dontHaveAccount: string
        pendingLogin: string
        signUp: string
    }
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, className, translations: t }) => {
    const [showPassword, setShowPassword] = useState(false)
    const tApiAnswer = useTranslations('api-answer')
    const tVal = useTranslations('input-validation')

    const loginSchema = getLoginSchema({
        emailRequired: tVal('emailRequired'),
        emailInvalid: tVal('emailInvalid'),
        passwordRequired: tVal('passwordRequired'),
        passwordMinLength: tVal('passwordMinLength'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    })

    const { isLoading, error, clearError, successApiMessage, setSuccessApiMessage, handleLogin } = useLogin({ onSuccess })
    type LoginFormData = z.infer<typeof loginSchema>

    const onSubmit = async (data: LoginFormData) => {
        try {
            const credentials: LoginCredentials = {
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe || false,
            }
            await handleLogin(credentials)
            reset()
        } catch (error) {
            // Error is handled by the store
            console.error('Login failed:', error)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    // const handleDemoLogin = async () => {
    //   try {
    //     clearError()
    //     const credentials: LoginCredentials = {
    //       email: demoCredentials.email,
    //       password: demoCredentials.password,
    //       rememberMe: true
    //     }

    //     await login(credentials)
    //     setLoginSuccess(true)
    //     onSuccess?.()
    //     router.push('/dashboard')
    //   } catch (error) {
    //     console.error('Demo login failed:', error)
    //   }
    // }

    return (
        <Card className={className}>
            <CardBody padding="none">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.welcomeBack}</h1>
                        <p className="text-gray-600">{t.signInToAccount}</p>
                    </div>
                    <AlertSection
                        loginSuccess={!!successApiMessage}
                        setLoginSuccess={setSuccessApiMessage}
                        error={error && resolveApiMessage(error, tApiAnswer, t.loginFailedMsg)}
                        clearError={clearError}
                        successMessage={resolveApiMessage(successApiMessage, tApiAnswer, t.loginSuccessMsg)}
                        errorTitle={t.loginFailedTitle}
                        successTitle={t.loginSuccessTitle}
                    />

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Input
                            {...register('email')}
                            type="email"
                            label={t.emailAddress}
                            placeholder={t.enterEmail}
                            error={errors.email?.message}
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
                            autoFocus
                        />
                        <Input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            label={t.password}
                            placeholder={t.enterPassword}
                            error={errors.password?.message}
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
                            suffixIcon={
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="text-gray-400 hover:text-gray-600 transition-colors">
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L5.636 5.636m14.142 14.142L15.536 15.536M8.464 8.464l1.414 1.414"
                                            />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            }
                            fullWidth
                            autoComplete="current-password"
                        />

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    {...register('rememberMe')}
                                    type="checkbox"
                                    className="rounded border-gray-300 text-[#98b5a4] focus:ring-[#98b5a4] focus:ring-2 focus:ring-opacity-50"
                                />
                                <span className="ml-2 text-sm text-gray-600">{t.rememberMe}</span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-sm text-[#98b5a4] hover:text-[#89a396] transition-colors">
                                {t.forgotPassword}
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            loading={isLoading}
                            disabled={!isValid || isLoading}>
                            {isLoading ? t.pendingLogin : t.signIn}
                        </Button>
                    </form>
                    <SocialButtons translation={t.or} />

                    {/* Register Link */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            {t.dontHaveAccount}{' '}
                            <Link href="/register" className="font-medium text-[#98b5a4] hover:text-[#89a396] transition-colors">
                                {t.signUp}
                            </Link>
                        </p>
                    </div>

                    {/* {DEMO_MODE && (
            <>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={handleDemoLogin}
                className="w-full"
              >
                {t.tryDemoMode}
              </Button>
              <div className="mt-2 text-center text-sm text-gray-500">
                Demo Email: {demoCredentials.email}
                <br />
                Demo Password: {demoCredentials.password}
              </div>
            </>
          )} */}
                </motion.div>
            </CardBody>
        </Card>
    )
}

export default LoginForm
