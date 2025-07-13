export type ApiMessageObj = { id_message: number | string }
export type ApiMessage = ApiMessageObj | string | null | undefined
export function resolveApiMessage(data: ApiMessage, tApiAnswer: (key: string) => string, fallback: string): string {
    console.log('resolveApiMessage input:', data)
    if (data && typeof data === 'object' && 'id_message' in data) {
        const code = String(data.id_message) || 'unknown'
        console.log('resolveApiMessage code:', code, 'result:', tApiAnswer(code))
        return tApiAnswer(code)
    }
    if (typeof data === 'string') {
        console.log('resolveApiMessage string:', data)
        return data
    }
    console.log('resolveApiMessage fallback:', fallback)
    return fallback
}

export function isSuccessApiMessage(id_message: string | number): boolean {
    if (typeof id_message === 'string') {
        id_message = parseInt(id_message)
    }
    if (isNaN(id_message)) return false // если не число — не успех
    return id_message >= 1000 && id_message <= 1009
}
