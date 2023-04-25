import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue'
import TodoCreateView from '../components/TodoCreateView.vue'

const routes = [
    {
        path: '/',
        name: 'Homeview',
        component: HomeView
    },
    {
        path: '/create',
        name: 'CreateView',
        component: TodoCreateView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router