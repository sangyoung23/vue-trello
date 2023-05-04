<template>
  <div class="form-todo">
    <div class="form-check" v-for="todo in findCheck.detailTodos" :key="todo">
      <input
        @change="setChecked(todo)"
        class="form-check-input"
        type="checkbox"
        value=""
        :id="`flexCheckDefault_${todo.id}`"
        :checked="todo.checked"
      />
      <label
        :class="[todo.checked ? 'checked' : 'check']"
        class="form-check-label"
        :for="`flexCheckDefault_${todo.id}`"
      >
        {{ todo.text }}
      </label>
      <input v-if="todo.hasChecklist" class="form-control" type="text" v-model="todo.checklist" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/list'

const store = useTodoStore()

const props = defineProps({
  todo: {
    type: Object
  }
})
const { detailTodos } = storeToRefs(store)

// 상세페이지의 각각의 아이템을 분리하기 위해 find 메서드 사용
const findCheck = detailTodos._object.todos.find((item) => item.id === props.todo.id)

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
.form-check {
  display: flex;
  align-items: center;
  width: 50%;
}
.form-check-label {
  font-size: 1.2rem;
  margin-left: 15px;
}
</style>
