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

      
    },
    // 세부내용 배열 추가 핸들러
    // id 값이 일치하는 객체를 찾아 일치 하는 객체 안에 체크리스트 text를 담는다.
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
    },
    // 완료 상태를 담는 함수
    doneAddTodo(todo) {
      this.doneTodos.push({ ...todo })
      const indexTodo = this.todos.findIndex((item) => item.id === todo.id)
      if (indexTodo !== -1) {
        this.todos.splice(indexTodo, 1)
      }
    },
    // 진행중인 상태를 담는 함수
    doingAddTodo(todo) {
      this.doingTodos.push({ ...todo })
      const indexTodo = this.todos.findIndex((item) => item.id === todo.id)
      if (indexTodo !== -1) {
        this.todos.splice(indexTodo, 1)
      }
    }
  }
})
