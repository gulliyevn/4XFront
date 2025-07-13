import axios from 'axios'

export const formatPrice = (price: number, decimals: number = 2) => {
    return price.toFixed(decimals)
}

export const formatChange = (change: number, percent: number) => {
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)} (${sign}${percent.toFixed(2)}%)`
}

export const getErrorMessage = (e: unknown, fallback: string = 'Error'): string => {
    if (axios.isAxiosError(e)) {
        const data = e.response?.data as Record<string, unknown> | undefined
        if (typeof data?.message === 'string') return data.message
        if (
            typeof data?.error === 'object' &&
            data.error !== null &&
            typeof (data.error as Record<string, unknown>).message === 'string'
        ) {
            return (data.error as Record<string, unknown>).message as string
        }
        return e.message || fallback
    }
    if (e instanceof Error) return e.message
    return fallback
}
