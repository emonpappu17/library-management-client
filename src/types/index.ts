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
    data?: T,
    error?: object,
    message?: string,
    success: boolean
}

export interface IAddBook {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description?: string;
    copies: number;
    available?: boolean;
}

export interface IBorrow {
    _id: string,
    book: string,
    quantity: number,
    dueDate: string,
    createdAt: string,
    updatedAt: string,
}

export interface IBorrowData {
    book: string;
    quantity: number;
    dueDate: string;
}

