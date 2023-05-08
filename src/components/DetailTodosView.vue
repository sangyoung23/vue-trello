<template>
  <div class="form-todo">
    <div class="form-check" v-for="todo in detailChecklist" :key="todo">
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
import { computed } from 'vue'
import {} from 'pinia'
import { useTodoStore } from '../stores/list'

const store = useTodoStore()

// DetailView에서 넘어온 todo 정의
const props = defineProps({
  todo: {
    type: Object
  }
})

// 상세페이지의 각각의 아이템을 분리하기 위해 find 메서드 사용
const detailChecklist = computed(() => {
  const targetTodo = store.todos.find((item) => item.id === props.todo.id)
  const targetTodo1 = store.doingTodos.find((item) => item.id === props.todo.id)
  const targetTodo2 = store.doneTodos.find((item) => item.id === props.todo.id)
  if (targetTodo) {
    return targetTodo.detailTodos
  } else if (targetTodo1) {
    return targetTodo1.detailTodos
  } else if (targetTodo2) {
    return targetTodo2.detailTodos
  }
  else {
    return null
  }
})

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
  width: 100%;
  margin: 20px 0;
}
.form-check-label {
  font-size: 1.2rem;
  margin-left: 15px;
}
</style>
