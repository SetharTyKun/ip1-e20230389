<script setup lang="ts">
    import { onMounted } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useBooksStore } from '@/stores/books'

    const store = useBooksStore()
    const { books, loading, error } = storeToRefs(store)

    onMounted(() => store.fetchBooks())
</script>

<template>
    <div class="flex justify-center items-center min-h-screen">
        <div>
            <h1 class="text-5xl mb-8">Catalogue View</h1>
            <p v-if="loading">Loading...</p>
            <p v-else-if="error">{{ error }}</p>
            <p v-else-if="books.length === 0">No books found</p>
            <ul v-else>
                <li v-for="book in books" :key="book.id">{{ book.title }}</li>
            </ul>
        </div>
    </div>
</template>