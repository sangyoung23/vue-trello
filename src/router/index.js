import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue'
import DetailView from '../components/DetailView.vue';
import TodoListView from '../views/TodoListView.vue';
import OngoingView from '../views/OngoingView.vue';
import CompletionView from '../views/CompletionView.vue';
import SearchListView from '../views/SearchListView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/list',
        name: 'ListView',
        component: TodoListView
    },
    {
        path: '/detail/:id/:todo',
        name: 'DetailView',
        component: DetailView,
        props: true
    },
    {
        path: '/ongoing',
        name: 'OngoingView',
        component: OngoingView
    },
    {
        path: '/completion',
        name: 'CompletionView',
        component: CompletionView
    },
    {
        path: '/search',
        name: 'SearchView',
        component: SearchListView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router