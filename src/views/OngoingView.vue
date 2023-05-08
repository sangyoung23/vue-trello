<template>
  <div id="doing">
    <strong>Doing</strong>
    <div class="status">
      <h3>진행중 : {{ doingTodos.length }}</h3>
    </div>
    <div class="status">
      <p>TOTAL : {{ doingTodos.length }}</p>
      <p>예상 시간 : {{ allTime }} H</p>
      <p>미등록 : {{ noTime }}</p>
    </div>
    <div id="card-box">
      <div class="card mb-2" v-for="todo in store.doingTodos" :key="todo">
        <div class="card-body">
          <h5 class="card-title mb-3">{{ todo.option1 }}</h5>
          <p class="card-text">{{ todo.option2 }} H</p>
          <p class="card-text">{{ todo.date }}</p>
          <button class="btn btn-success me-1" @click="goDetail(todo.id, todo)">자세히 보기</button>
          <button class="btn btn-danger" @click="removeDoing(todo)">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/list'

const store = useTodoStore()
const router = useRouter()
const {doingTodos} = storeToRefs(store)
const total = ref(doingTodos)

// 총 예상 시간
const allTime = computed(() => {
  return total.value.reduce((sum, item) => sum + Number(item.option2), 0)
})

// 예상 시간 미등록 개수
const noTime = computed(() => {
  return total.value.filter((item) => !item.option2).length
})

// Detail 이동
const goDetail = (id, todo) => {
  router.push({
    name: 'DetailView',
    params: {
      id,
      todo: JSON.stringify(todo)
    }
  })
}

// 삭제 핸들러
const removeDoing = (todo) => {
  store.removeDoingTodos(todo)
}
</script>

<style scoped>
#doing {
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
#doing strong {
  font-size: 2rem;
  color: green;
}
#doing .status {
  text-align: center;
  margin-bottom: 1rem;
}
#doing .status h3 {
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
#doing::-webkit-scrollbar {
  width: 10px;
}
#doing::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
#doing::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
#doing .status {
  display: flex;
  justify-content: space-around;
}
#doing .status p:nth-child(1) {
  font-weight: bold;
  font-size: 1.3rem;
  color: #0066ff;
}
#doing .status p:nth-child(2) {
  font-weight: bold;
  font-size: 1.3rem;
  color: green;
}
#doing .status p:nth-child(3) {
  font-weight: bold;
  font-size: 1.3rem;
  color: coral;
}
</style>
