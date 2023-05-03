<template>
  <div id="done">
    <strong>Done</strong>
    <div class="status">
      <h2>완료 : {{ store.doneTodos.length }}</h2>
    </div>
    <div id="card-box">
      <div class="card mb-2" v-for="todo in store.doneTodos" :key="todo">
        <div class="card-body">
          <h5 class="card-title mb-3">{{ todo.option1 }}</h5>
          <p class="card-text">{{ todo.option2 }} H</p>
          <p class="card-text">{{ todo.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/list'

const store = useTodoStore()
</script>

<style scoped>
#done {
  width: 80%;
  height: 550px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
}
#done strong {
  font-size: 2rem;
  color: green;
}
#done .status {
  text-align: center;
  margin-bottom: 2rem;
}
#done .status h2 {
  font-weight: bold;
}
.card-title {
  font-weight: bold;
}
.card-text {
  font-weight: bold;
  color: #ccc;
}
.card {
  display: flex;
  width: 300px;
  margin-right: 10px;
}
#card-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
