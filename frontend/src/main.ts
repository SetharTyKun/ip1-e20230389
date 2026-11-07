import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router/index.ts'
import './assets/main.css'

createApp(App).use(router).use(createPinia()).mount('#app')


// use(router): makes RouterView and RouterLink work.