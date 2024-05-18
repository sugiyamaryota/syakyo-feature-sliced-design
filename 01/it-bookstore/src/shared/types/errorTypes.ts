export interface ErrorType {
    readonly meesage: string
    readonly response: {
        readonly status?: string
    }
}

export interface RejectedDataType {
    readonly messageError: string
    readonly status?: string
}