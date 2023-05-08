<template>
  <div id="create">
    <form class="mb-3" @submit.prevent="inputCheck">
      <input
        v-model="todos.option1"
        type="text"
        class="form-control"
        placeholder="할 일 입력"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <input
        v-model="todos.option2"
        type="text"
        class="form-control"
        placeholder="예상 시간 작성"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button class="btn btn-outline-warning" id="button-addon1">추가</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useTodoStore } from '../stores/list'

const store = useTodoStore()

// 할 일과 예상시간 store로 전달할 때 담을 객체
const todos = reactive({
  option1: '',
  option2: '',
  date: new Date().toISOString().substring(0, 10),
  id: 0,
  attr: null
})

// 추가 핸들러
const addTodo = () => {
  store.addTodo(todos)
  todos.option1 = ''
  todos.option2 = ''
}

// input 유효성 검사 핸들러
const inputCheck = computed(() => {
  if (todos.option1 === '') {
    return alert('할 일을 입력해주세요')
  } else if (isNaN(todos.option2)) {
    return alert('예상시간은 숫자만 입력 가능합니다.')
  } else if (Number(todos.option2) >= 10) {
    return alert('시간은 한자리 수만 입력 가능합니다.')
  }
  else {
    return addTodo()
  }
})
</script>

<style scoped>
#create {
  padding: 10px;
}
#create form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#create input {
  width: 55%;
  height: 35px;
  margin-right: 20px;
}
#create button {
  width: 15%;
  height: 35px;
  text-align: center;
}
</style>
