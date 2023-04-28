<template>
  <div class="detail">
    <div class="detail-head">
      <h1>{{ attr }}</h1>
      <select
        @change="changeAttr($event)"
        class="form-select"
        aria-label="Default select example"
        v-model="attr"
      >
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
      <button class="btn btn-outline-warning" id="button-addon1" @click="detailAddTodo">
        추가
      </button>
    </form>
    <div class="detail-body">
      <div class="detail-content">
        <h1>오늘의 할일 : {{ todo.option1 }}</h1>
        <h2>예상시간 : {{ todo.option2 }} H</h2>
      </div>
        <div class="form-todo">
          <div class="form-check" v-for="todo in detailTodos" :key="todo">
            <input
              @change="setChecked(todo)"
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              :class="[todo.checked ? style1 : style2]"
              class="form-check-label"
              for="flexCheckDefault"
              >{{ todo.text }}</label
            >
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useTodoStore } from '../stores/list'
const style1 = 'checked'
const style2 = 'check'

const store = useTodoStore()
const route = useRoute()
const todo = JSON.parse(route.params.todo)
const detailTodo = reactive({
  text: '',
  checked: false
})
const attr = ref(todo.attr ? 'done' : 'doing')
const { detailTodos } = storeToRefs(store)

const changeAttr = (event) => {
  if (event.target.value === 'done') {
    todo.attr = true
    attr.value = 'done'
  } else if (event.target.value === 'doing') {
    todo.attr = false
    attr.value = 'doing'
  }
}

const detailAddTodo = () => {
  store.detailAddTodo(detailTodo)
  detailTodo.text = ''
}

const setChecked = (todo) => {
  todo.checked = !todo.checked
}
</script>

<style scoped>
.checked {
  text-decoration: line-through 2px;
}
.check {
  text-decoration: none;
}
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
}
#detail-create input {
  width: 90%;
  height: 50px;
  margin-right: 40px;
}
#detail-create button {
  height: 50px;
}
</style>
