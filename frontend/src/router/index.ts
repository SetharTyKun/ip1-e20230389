import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    // public
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
    { path: '/register', name: 'register', component: () => import('@/views/RegisterView.vue') },

    // catalogue (members and librarians)
    { path: '/books', name: 'catalogue', component: () => import('@/views/BookView.vue') },
    { path: '/books/:id', name: 'book-detail', component: () => import('@/views/BookDetailView.vue') },

    // members
    { path: '/my-loans', name: 'my-loans', component: () => import('@/views/MyLoansView.vue') },
    
    // librarians
    { path: '/staff/books', name: 'staff-books', component: () => import('@/views/StaffBooksView.vue') },
    { path: '/staff/loans', name: 'staff-loans', component: () => import('@/views/StaffLoansView.vue') },
    { path: '/staff/lend', name: 'staff-lend', component: () => import('@/views/StaffLendView.vue') },

    // anything else
    { path: "/:pathMatch(.*)*", name: "not-found", component: () => import('@/views/NotFoundView.vue') },
  ],
});