import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'
import { LoginCredentials } from '@/types/auth'

export type ApiLoginResponse = { id_message: number | string; [key: string]: unknown } | undefined

interface UseLoginOptions {
    onSuccess?: () => void
}

export function useLogin({ onSuccess }: UseLoginOptions = {}) {
    const { login, isLoading, error, clearError } = useAuthStore()
    const [successApiMessage, setSuccessApiMessage] = useState<ApiLoginResponse>(undefined)
    const router = useRouter()

    const handleLogin = useCallback(
        async (credentials: LoginCredentials) => {
            try {
                const apiData = (await login(credentials)) as ApiLoginResponse
                const { isAuthenticated } = useAuthStore.getState()

                if (isAuthenticated && apiData) {
                    setSuccessApiMessage(apiData)
                    onSuccess?.()
                    router.push('/dashboard')
                    return apiData // success
                } else {
                    setSuccessApiMessage(undefined)
                    return false // неуспешно
                }
            } catch (err: unknown) {
                console.log(err)
                setSuccessApiMessage(undefined)
                return false
            }
        },
        [login, onSuccess, router],
    )

    return {
        isLoading,
        error,
        clearError,
        successApiMessage,
        setSuccessApiMessage,
        handleLogin,
    }
}
