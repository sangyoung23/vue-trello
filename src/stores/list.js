import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [],
    detailTodos: [],
    doneTodos: [],
    doingTodos: []
  }),
  actions: {
    // todos 배열에 추가 핸들러
    addTodo(todo) {
      todo.id++
      this.todos.push({ ...todo })
    },
    // todos 배열안 값 삭제 핸들러
    removeTodoAndRelated(todo) {
      // todos 배열에서 삭제
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
      
      // doneTodos 배열에서 삭제
      const doneIndex = this.doneTodos.findIndex((item) => item.id === todo.id)
      if (doneIndex !== -1) {
        this.doneTodos.splice(doneIndex, 1)
      }
      
      // doingTodos 배열에서 삭제
      const doingIndex = this.doingTodos.findIndex((item) => item.id === todo.id)
      if (doingIndex !== -1) {
        this.doingTodos.splice(doingIndex, 1)
      }
    },
    // 세부내용 배열 추가 핸들러
    detailAddTodo(detailTodo, todo) {
      const targetTodo = this.todos.find((item) => item.id === todo.id)
      if (targetTodo) {
        const detailItem = { ...detailTodo, id: Date.now() }
        if (!targetTodo.detailTodos) {
          targetTodo.detailTodos = [detailItem]
        } else {
          targetTodo.detailTodos.push(detailItem)
        }
      }
      console.log(this.detailTodos)
    },
    // 완료 상태를 담는 함수
    doneAddTodo(todo) {
      this.doneTodos.push({ ...todo })
    },
    // 진행중인 상태를 담는 함수
    doingAddTodo(todo) {
      this.doingTodos.push({ ...todo })
    },
  }
})
