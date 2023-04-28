import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [],
    detailTodos: []
  }),
  actions: {
    // toods 배열에 추가 핸들러
    addTodo(todo) {
      this.todos.push({ ...todo, attr: false })
    },
    // todos 배열안 값 삭제 핸들러
    removeTodo(todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    // 세부내용 배열 추가 핸들러
    detailAddTodo(todo) {
      this.detailTodos.push({ ...todo })
    }
  }
})
