<template>
    <div id="home">
        <TodoCreateView></TodoCreateView>
        <div class="list-box">
            <TodoListView></TodoListView>
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