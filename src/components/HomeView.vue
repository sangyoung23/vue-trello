<template>
  <div id="home">
    <TodoCreateView></TodoCreateView>
    <div class="list-box">
      <TodoListView></TodoListView>
      <OngoingView></OngoingView>
      <CompletionView></CompletionView>
      <SearchTodoView></SearchTodoView>
    </div>
  </div>
</template>

<script setup>
import TodoListView from '../views/TodoListView.vue'
import OngoingView from '../views/OngoingView.vue'
import CompletionView from '../views/CompletionView.vue'
import TodoCreateView from './TodoCreateView.vue'
import SearchTodoView from './SearchTodoView.vue'
</script>

<style scoped>
#home {
  padding: 2rem;
}
#home .list-box {
  display: flex;
  justify-content: space-around;
}
</style>
