<template>
  <div id="todoList">
    <strong> To do </strong>
    <TodoCreateView></TodoCreateView>
    <div class="status">
      <p>TOTAL : {{ todos.length }}</p>
      <p>예상 시간 : {{ allTime }} H</p>
      <p>미등록 : {{ noTime }}</p>
    </div>
    <div id="card-box">
      <div class="card mb-2" v-for="todo in todos" :key="todo">
        <div class="card-body">
          <h5 class="card-title mb-3">{{ todo.option1 }}</h5>
          <p class="card-text">{{ todo.option2 }} H</p>
          <p class="card-text">{{ todo.date }}</p>
          <button class="btn btn-success me-1" @click="goDetail(todo.id, todo)">자세히 보기</button>
          <button class="btn btn-danger" @click="removeTodo(todo)">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/list'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import TodoCreateView from '../components/TodoCreateView.vue'

const router = useRouter()
const store = useTodoStore()
const { todos } = storeToRefs(store)
const total = ref(todos)

// 삭제 핸들러
const removeTodo = (todo) => {
  store.removeTodo(todo)
}

// 총 예상 시간
const allTime = computed(() => {
  return total.value.reduce((sum, item) => sum + Number(item.option2), 0)
})

// 예상 시간 미등록 개수
const noTime = computed(() => {
  return total.value.filter((item) => !item.option2).length
})

// Detail 이동 핸들러
const goDetail = (id, todo) => {
  router.push({
    name: 'DetailView',
    params: {
      id,
      todo: JSON.stringify(todo)
    }
  })
}
</script>

<style scoped>
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
.btn {
  font-size: 13px;
}
#todoList {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 710px;
  padding: 15px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
}
#todoList::-webkit-scrollbar {
  width: 10px;
}
#todoList::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
#todoList::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
#todoList strong {
  font-size: 22px;
  color: tomato;
}
#todoList .list-box {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
}
#todoList .list-box .title {
  display: flex;
  justify-content: center;
  width: 70px;
  border-radius: 7px;
  background-color: #0066ff;
}
#todoList .list-box .title h1 {
  font-size: 17px;
  font-weight: bold;
  color: white;
}
#todoList .status {
  display: flex;
  justify-content: space-around;
}
#todoList .status p:nth-child(1) {
  font-weight: bold;
  font-size: 1.3rem;
  color: #0066ff;
}
#todoList .status p:nth-child(2) {
  font-weight: bold;
  font-size: 1.3rem;
  color: green;
}
#todoList .status p:nth-child(3) {
  font-weight: bold;
  font-size: 1.3rem;
  color: coral;
}
</style>
