<template>
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
    {{ props.todo.attr }}
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/list'

const style1 = 'checked'
const style2 = 'check'
const store = useTodoStore()

const {detailTodos} = storeToRefs(store)

const props = defineProps({
    todo: Object
})

console.log(props.todo.attr)

// 체크값의 따라 특정 클래스 부여
const setChecked = (detailTodo) => {
  detailTodo.checked = !detailTodo.checked
  !props.todo.attr
}
</script>

<style scoped></style>
