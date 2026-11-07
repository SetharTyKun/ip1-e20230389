<script setup lang="ts">
    import { onMounted } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useBooksStore } from '@/stores/books'

    const store = useBooksStore()
    const { books, loading, error } = storeToRefs(store)

    onMounted(() => store.fetchBooks())
</script>

<template>
    <!-- background -->
    <div class="bg-paper">

        <!-- content -->
        <div class="bg-white mx-auto max-w-5xl p-4 rounded-lg">
            <h1 class="text-2xl font-bold">Books</h1>

            <p v-if="loading">Loading...</p>
            <p v-else-if="error">{{ error }}</p>
            <p v-else-if="books.length === 0">No books found</p>
            <ul v-else>
                <li v-for="book in books" :key="book.id">{{ book.title }}</li>
            </ul>
        </div>
    </div>
</template>