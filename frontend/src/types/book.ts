export interface Book {
    id: number,
    title: string,
    author: string,
    isbn: string,
    description: string | null,
    category_id: number,
    copies_total: number,
    copies_available: number,
    active: boolean,
    cover_url: string | null,
    created_at: string,
    updated_at: string | null,
}