import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [],
    detailTodos: [],
    doneTodos: [],
    doingTodos: [],
    array: []
  }),
  actions: {
    // todos 배열에 추가 핸들러
    addTodo(todo) {
      todo.id++
      this.todos.push({ ...todo })
      this.array.push(this.todos) 
    },
    // todos 배열안 값 삭제 핸들러
    removeTodoAndRelated(todo) {
      // todos 배열에서 삭제
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    // 진행중 삭제 핸들러
    removeDoingTodos(todo) {
      const index = this.doingTodos.indexOf(todo)
      this.doingTodos.splice(index, 1)
    },
    // 완료 삭제 핸들러
    removeDoneTodos(todo) {
      const index = this.doneTodos.indexOf(todo)
      this.doneTodos.splice(index, 1)
    },
    // 세부내용 배열 추가 핸들러
    // id 값이 일치하는 객체를 찾아 일치 하는 객체 안에 체크리스트 text를 담는다.
    detailAddTodo(detailTodo, todo) {
      const targetTodo = this.todos.find((item) => item.id === todo.id)
      const targetTodo1 = this.doingTodos.find((item) => item.id === todo.id)
      const targetTodo2 = this.doneTodos.find((item) => item.id === todo.id)
      if (targetTodo) {
        const detailItem = { ...detailTodo, id: Date.now() }
        if (!targetTodo.detailTodos) {
          targetTodo.detailTodos = [detailItem]
        }  
        else {
          targetTodo.detailTodos.push(detailItem)
        }
      }
      if (targetTodo1) {
        const detailItem = { ...detailTodo, id: Date.now() }
        if (!targetTodo1.detailTodos) {
          targetTodo1.detailTodos = [detailItem]
        }  
        else {
          targetTodo1.detailTodos.push(detailItem)
        }
      }
      if (targetTodo2) {
        const detailItem = { ...detailTodo, id: Date.now() }
        if (!targetTodo2.detailTodos) {
          targetTodo2.detailTodos = [detailItem]
        }  
        else {
          targetTodo2.detailTodos.push(detailItem)
        }
      }
    },
    // 완료 상태를 담는 함수
    doneAddTodo(todo) {
      this.doneTodos.push({ ...todo })
      const indexTodo = this.doingTodos.findIndex((item) => item.id === todo.id)

      if (indexTodo !== -1) {
        this.doingTodos.splice(indexTodo, 1)
      }
      this.array.push(this.doneTodos) 
    },
    // 진행중인 상태를 담는 함수
    doingAddTodo(todo) {
      this.doingTodos.push({ ...todo })
      const indexTodo = this.doneTodos.findIndex((item) => item.id === todo.id)

      if (indexTodo !== -1) {
        this.doneTodos.splice(indexTodo, 1)
      }
      this.array.push(this.doingTodos) 
    }
  }
})
