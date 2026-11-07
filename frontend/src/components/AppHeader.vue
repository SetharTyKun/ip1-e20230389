<template>
    <!-- main-header -->
    <div class="bg-header p-2 text-white">
        <div class="mx-auto max-w-5xl flex justify-between">
            <RouterLink to="/">Library Loans</RouterLink>

        </div>
    </div>

    <!-- sub-header -->
    <div class="bg-paper p-4">
        <div class="mx-auto max-w-5xl max-h-9 flex items-center justify-between gap-6">

            <div class="flex-2">
                <a href="">
                    My Books
                </a>
            </div>

            <input
                type="search"
                placeholder="Search"
                class="flex-1 rounded-lg border border-gray-300 bg-white px-2 py-1"
            />

            <button class="bg-accent text-white px-3 py-1 rounded-lg">
                Login
            </button>

        </div>
    </div>
</template>