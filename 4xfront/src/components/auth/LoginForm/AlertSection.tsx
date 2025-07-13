import { Alert } from '@/components/ui'
import { ApiLoginResponse } from '@/hooks/useLogin'

export const AlertSection: React.FC<{
    loginSuccess: boolean
    setLoginSuccess: (msg: ApiLoginResponse | undefined) => void
    error: string | null
    clearError: () => void
    successMessage: string
    successTitle: string
    errorTitle: string
}> = ({ loginSuccess, setLoginSuccess, error, successMessage, clearError, successTitle, errorTitle }) => (
    <>
        {loginSuccess && (
            <Alert
                type="success"
                title={successTitle}
                className="mb-6"
                autoHideDuration={3000}
                dismissible
                onDismiss={() => setLoginSuccess(undefined)}>
                {successMessage}
            </Alert>
    )}
    
        {error && (
            <Alert type="error" title={errorTitle} className="mb-6" dismissible onDismiss={clearError}>
                {error}
            </Alert>
        )}
    </>
)
