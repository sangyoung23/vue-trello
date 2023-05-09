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
    editTodos(todo, editText) {
      const editFindTodo = this.todos.find((item) => item.id === todo.id)
      const editFindDone = this.doneTodos.find((item) => item.id === todo.id)
      const editFindDoing = this.doingTodos.find((item) => item.id === todo.id)
      if (editFindTodo) {
        editFindTodo.option1 = editText
      } else if (editFindDone) {
        editFindDone.option1 = editText
      } else if (editFindDoing) {
        editFindDoing.option1 = editText
      } else {
        return
      }
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
        } else {
          targetTodo.detailTodos.push(detailItem)
        }
      }
      if (targetTodo1) {
        const detailItem = { ...detailTodo, id: Date.now() }
        if (!targetTodo1.detailTodos) {
          targetTodo1.detailTodos = [detailItem]
        } else {
          targetTodo1.detailTodos.push(detailItem)
        }
      }
      if (targetTodo2) {
        const detailItem = { ...detailTodo, id: Date.now() }
        if (!targetTodo2.detailTodos) {
          targetTodo2.detailTodos = [detailItem]
        } else {
          targetTodo2.detailTodos.push(detailItem)
        }
      }
    },
    doneAddTodo (todo) {
      // doingTodos에서 doneTodos로 옮겨갈 때 doingTodos 배열에서 현재 아이템을 찾는다.
      const indexTodo = this.doingTodos.findIndex(item => item.id === todo.id)
      console.log(indexTodo)
      if (indexTodo !== -1) {
        // todos 배열에서 현재 아이템을 삭제
        this.doingTodos.splice(indexTodo, 1)
      }
    
      // doneTodos 배열에 현재 아이템을 추가
      this.doneTodos.push({ ...todo })
    },
    doingAddTodo (todo) {
      // doneTodos에서 doingTodos로 옮겨갈 때 doneTodos 배열에서 현재 아이템을 찾는다.
      const indexTodo = this.doneTodos.findIndex(item => item.id === todo.id)
      console.log(indexTodo)
      if (indexTodo !== -1) {
        // todos 배열에서 현재 아이템을 삭제
        this.doneTodos.splice(indexTodo, 1)
      }
    
      // doingTodos 배열에 현재 아이템을 추가
      this.doingTodos.push({ ...todo })
    }
    
  }
})
