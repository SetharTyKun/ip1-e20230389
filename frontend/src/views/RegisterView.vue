<script setup lang="ts">
    import { computed, ref } from 'vue'

    const fullName = ref<string>('')
    const email = ref<string>('')
    const password = ref<string>('')
    const confirmPassword = ref<string>('')
    const submitted = ref<boolean>(false)

    const fullNameError = computed(() => {
        if (fullName.value.trim() === '') return 'Full name is required'
        return ''
    })

    const emailError = computed(() => {
        if (email.value.trim() === '') return 'Email is required'
        if (!/^\S+@\S+\.\S+$/.test(email.value)) return 'Enter a valid email address'
        return ''
    })

    const passwordError = computed(() => {
        if (password.value.trim() === '') return 'Password is required'
        if (password.value.length < 8) return 'Password must be at least 8 characters'
        return ''
    })


    function onSubmit() {
        submitted.value = true
    }

</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <form @submit.prevent="onSubmit" class="w-full max-w-sm rounded-lg border bg-white p-8 shadow">
            <p class="text-2xl font-bold">Create account</p>
            <p class="text-sm text-gray-500 mb-6">New accounts are members</p>

            <label for="full-name">Full name</label>
            <br>
            <input v-model="fullName" type="text" name="full-name" id="full-name" class="px-2 py-1 border-gray-500 border rounded-lg focus:border-blue-500 focus:outline-none w-full">
            <p v-if="submitted && fullNameError" class="text-sm text-red-600 mt-1">{{ fullNameError }}</p>
            
            <div class="mb-2"></div>

            <label for="email">Email</label>
            <br>
            <input v-model="email" type="email" name="email" id="email" class="px-2 py-1 border-gray-500 border rounded-lg focus:border-blue-500 focus:outline-none w-full">
            <p v-if="submitted && emailError" class="text-sm text-red-600 mt-1">{{ emailError }}</p>

            <div class="mb-2"></div>

            <label for="password">Password</label>
            <br>
            <input v-model="password" type="password" name="password" id="password" class="px-2 py-1 border-gray-500 border rounded-lg focus:border-blue-500 focus:outline-none w-full">
            <p v-if="submitted && passwordError" class="text-sm text-red-600 mt-1">{{ passwordError }}</p>

            <div class="mb-2"></div>

            <label for="confirm-password">Confirm password</label>
            <br>
            <input v-model="confirmPassword" type="password" name="confirm-password" id="confirm-password" class="px-2 py-1 border-gray-500 border rounded-lg focus:border-blue-500 focus:outline-none w-full">
            
            <div class="mb-8"></div>

            <button type="submit" class="mx-auto w-full cursor-pointer bg-blue-500 text-white rounded-lg py-1">Submit</button>
        </form>
    </div>
</template>