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
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/list'
import { ref } from 'vue'

const style1 = 'checked'
const style2 = 'check'
const store = useTodoStore()

const { detailTodos } = storeToRefs(store)

// props로 전달 받은 것은 ref, reactive에 반응성 연결을 한 뒤
// 값을 변경하는 코드를 작성한다.
const props = defineProps({
  todo: Object
})

// props값 데이터 값 조작을 위해 ref 연결
const refProps = ref(props)

// 체크값의 따라 특정 클래스 부여
const setChecked = (detailTodo) => {
  detailTodo.checked = !detailTodo.checked
  refProps.value.todo.attr = !refProps.value.todo.attr
}
</script>

<style scoped>
.checked {
  text-decoration: line-through 2px;
}
.check {
  text-decoration: none;
}
</style>
