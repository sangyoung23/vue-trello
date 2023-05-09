<template>
  <div class="detail">
    <div class="detail-head">
      <h1 v-if="todo.attr">{{ done }}</h1>
      <h1 v-else-if="todo.attr === null">{{ attr }}</h1>
      <h1 v-else>{{ doing }}</h1>
      <select
        @change="changeAttr($event)"
        class="form-select"
        aria-label="Default select example"
        v-model="attr"
      >
        <option value="상태">상태</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
    </div>
    <form id="detail-create" class="mb-3" @submit.prevent>
      <input
        v-model="detailTodo.text"
        type="text"
        class="form-control"
        placeholder="추가사항을 입력하세요."
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <input
        type="text"
        v-model="editText"
        placeholder="수정 할 내용을 작성하세요"
        class="form-control"
      />
      <button class="btn btn-outline-warning" id="button-addon1" @click="detailAddTodo">
        추가
      </button>
    </form>
    <div class="detail-body">
      <div class="detail-content">
        <h1 class="today-todo">오늘의 할일</h1>
        <h1>{{ todo.option1 }}</h1>
        <h2>예상시간 : {{ todo.option2 ? `${todo.option2} H` : '없음' }}</h2>
      </div>
      <DetailTodosView :todo="todo"></DetailTodosView>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <button type="button" class="btn btn-outline-danger me-3" @click="editTodo">수정</button>
      <button type="button" class="btn btn-outline-success" @click="attrTodos">저장</button>
    </div>
  </div>
</template>

<script setup>
import DetailTodosView from './DetailTodosView.vue'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodoStore } from '../stores/list'

const editText = ref('')
const store = useTodoStore()
const route = useRoute()
const router = useRouter()
const todo = JSON.parse(route.params.todo)
const attr = ref('상태')
const doing = ref('doing')
const done = ref('done')
const detailTodo = reactive({
  text: ''
})

const editTodo = () => {
  store.editTodos(todo, editText.value)
  todo.option1 = editText.value
  editText.value = ''
  alert('수정이 완료되었습니다')
  router.push({ name: 'HomeView' })
}

// select 값에 따른 데이터 바인딩
const changeAttr = (event) => {
  if (event.target.value === 'done') {
    todo.attr = true
  } else if (event.target.value === 'doing') {
    todo.attr = false
  }
}
// attr 값에 따른 done, doing 분류
const attrTodos = () => {
  if (todo.attr === true) {
    const result = store.doneTodos.find((item) => item.option1 === todo.option1)
    if (result) {
      alert('현재 완료 상태입니다.')
    } else {
      store.doneAddTodo(todo)
      const index = store.todos.findIndex((item) => item.id === todo.id)
      if (index !== -1) {
        store.todos.splice(index, 1)
      }
      const index1 = store.doingTodos.findIndex((item) => item.id === todo.id)
      if (index1 !== -1) {
        store.doingTodos.splice(index1, 1)
      }
      alert('저장이 완료되었습니다.')
    }
  } else if (todo.attr === false) {
    const result = store.doingTodos.find((item) => item.option1 === todo.option1)
    if (result) {
      alert('현재 진행중 상태입니다.')
    } else {
      store.doingAddTodo(todo)
      const index = store.todos.findIndex((item) => item.id === todo.id)
      if (index !== -1) {
        store.todos.splice(index, 1)
      }
      const index1 = store.doneTodos.findIndex((item) => item.id === todo.id)
      if (index1 !== -1) {
        store.doneTodos.splice(index1, 1)
      }
      alert('저장이 완료되었습니다.')
    }
  }
  router.push({ name: 'HomeView' })
}

// 상세페이지 세부내용 추가 핸들러
const detailAddTodo = () => {
  if (detailTodo.text === '') {
    alert('추가사항을 입력해주세요')
  } else {
    store.detailAddTodo(detailTodo, todo)
    detailTodo.text = ''
  }
}
</script>

<style scoped>
.detail {
  width: 80%;
  height: 710px;
  padding: 2rem;
  margin-left: 4rem;
  border-radius: 5px;
  background-color: #fff;
}
.detail-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.detail-head h1 {
  font-weight: bold;
  color: tomato;
}
.detail-body {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  margin-top: 3rem;
}

.form-todo {
  display: flex;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
}
.form-todo::-webkit-scrollbar {
  width: 10px;
}
.form-todo::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
.form-todo::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
.form-select {
  width: 10%;
}
.form-check {
  width: 40%;
  margin: 0 20px 30px 0;
}
.form-check label {
  font-weight: bold;
}
.detail-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}
.detail-content .today-todo {
  font-weight: bold;
  color: goldenrod;
}
.detail-content h1 {
  text-align: center;
}
.detail-content h2 {
  margin-top: 20px;
  color: #ccc;
}
.form-todo {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 30%;
}
#detail-create {
  display: flex;
  justify-content: space-between;
}
#detail-create input {
  width: 40%;
  height: 50px;
}
#detail-create button {
  height: 50px;
}
</style>
