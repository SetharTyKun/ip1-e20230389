import { api } from "./api"
import type { Book } from "@/types/book"

export async function getBooks(): Promise<Book[]> {
    const response = await api.get<Book[]>('/books')
    return response.data
}

/* 
    Response shape (Object):
    {
        data: [],
        status: 200,
        statusText: 'OK',
        headers: { 'content-type': 'application/json; charset=utf-8', ... },
        config: { url: '/books', method: 'get', baseURL: 'http://localhost:3001', ... },
        request: XMLHttpRequest { ... }
    }
*/