<template>
    <div id="home">
        <TodoListView></TodoListView>
        <OngoingView></OngoingView>
        <CompletionView></CompletionView>
    </div>
</template>

<script setup>
import TodoListView from '../views/TodoListView.vue';
import OngoingView from '../views/OngoingView.vue';
import CompletionView from '../views/CompletionView.vue';
</script>

<style scoped>
#home {
    display: flex;
    justify-content: space-around;
    padding: 2rem;
}
</style>