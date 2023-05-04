<template>
  <div id="done">
    <strong>Done</strong>
    <div class="status">
      <h2>완료 : {{ store.doneTodos.length }}</h2>
    </div>
    <div class="status">
      <p>TOTAL : {{ doneTodos.length }}</p>
      <p>예상 시간 : {{ allTime }} H</p>
      <p>미등록 : {{ noTime }}</p>
    </div>
    <div id="card-box">
      <div class="card mb-2" v-for="todo in store.doneTodos" :key="todo">
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
import {ref, computed} from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/list'

const store = useTodoStore()
const {doneTodos} = storeToRefs(store)
const total = ref(doneTodos)

// 총 예상 시간
const allTime = computed(() => {
  return total.value.reduce((sum, item) => sum + Number(item.option2), 0)
})

// 예상 시간 미등록 개수
const noTime = computed(() => {
  return total.value.filter((item) => !item.option2).length
})

// 삭제 핸들러
const removeTodo = (todo) => {
  store.removeTodoAndRelated(todo)
}
</script>

<style scoped>
#done {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 90%;
  padding: 15px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
}
#done strong {
  font-size: 2rem;
  color: green;
}
#done .status {
  text-align: center;
  margin-bottom: 1rem;
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
  width: 100%;
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
#done::-webkit-scrollbar {
  width: 10px;
}
#done::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
#done::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
#done .status {
  display: flex;
  justify-content: space-around;
}
#done .status p:nth-child(1) {
  font-weight: bold;
  font-size: 1.3rem;
  color: #0066ff;
}
#done .status p:nth-child(2) {
  font-weight: bold;
  font-size: 1.3rem;
  color: green;
}
#done .status p:nth-child(3) {
  font-weight: bold;
  font-size: 1.3rem;
  color: coral;
}
</style>
