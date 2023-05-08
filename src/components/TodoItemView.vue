<template>
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
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTodoStore } from '../stores/list'
import { storeToRefs } from 'pinia'

const store = useTodoStore()
const router = useRouter()
const { todos } = storeToRefs(store)

// 삭제 핸들러
const removeTodo = (todo) => {
  store.removeTodoAndRelated(todo)
}

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
  width: 100%;
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
</style>
