export interface IBook {
    _id: string,
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description?: string,
    copies: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
}

export interface IApiResponse<T> {
    data: T,
    message?: string,
    success: boolean
}