<template>
    <div id="home">
        <TodoCreateView @add="fetchList"></TodoCreateView>
        <div class="list-box">
            <TodoListView :todoList="todoList"></TodoListView>
            <OngoingView></OngoingView>
            <CompletionView></CompletionView>
        </div>
    </div>
</template>

<script setup>
import TodoListView from '../views/TodoListView.vue';
import OngoingView from '../views/OngoingView.vue';
import CompletionView from '../views/CompletionView.vue';
import TodoCreateView from './TodoCreateView.vue';

import {ref} from 'vue'


// TodoCreate에서 넘어온 데이터를 담아두기
const todoList = ref({
    title: '',
    time: ''
})

// TodoCreate 컴포넌트에서 emit으로 전달받은 데이터를 ref에 담기
const fetchList = (title, time) => {
    todoList.value.title = title
    todoList.value.time = time
}

</script>

<style scoped>
#home {
    height: 100vh;
    padding: 2rem;
}
#home .list-box {
    display: flex;
    justify-content: space-around;
}
</style>