import { ref } from "vue";
import { defineStore } from "pinia";
import type { Book } from '@/types/book'
import { getBooks } from '@/services/bookService'

export const useBooksStore = defineStore('books', () => {
    const books = ref<Book[]>([])
    const error = ref('')
    const loading = ref(false)

    async function fetchBooks() {
        loading.value = true
        error.value = ''

        try {
            books.value = await getBooks()
        } catch {
            error.value = 'Could not load books.'
        } finally {
            loading.value = false
        }
    }

    return { books, loading, error, fetchBooks }
})