<template>
  <div id="searchList">
    <strong>Search List</strong>
    <form @submit.prevent class="d-flex justify-content-end" role="search">
      <input
        v-model="text"
        class="form-control m-3"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    <div v-if="text">
      <div class="card mb-2" v-for="todo in filteredTodos" :key="todo.id">
        <div class="card-body">
          <h5 class="card-title mb-3">{{ todo.option1 }}</h5>
          <p class="card-text">{{ todo.option2 }} H</p>
          <p class="card-text">{{ todo.date }}</p>
          <button class="btn btn-success" @click="goDetail(todo.id, todo)">자세히 보기</button>
        </div>
      </div>
    </div>
    <div class="no-result" v-else>
      <p>검색 결과가 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/list'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useTodoStore()
const router = useRouter()
const text = ref('')

const filteredTodos = computed(() => {
  // toLowerCase를 이용해서 대소문자 구분없이 검색 가능, trim으로 공백 제거
  const searchValue = text.value.toLowerCase().trim()
  return [...store.todos, ...store.doneTodos, ...store.doingTodos].filter((item) => {
    return item.option1.toLowerCase().includes(searchValue)
  })
})

const goDetail = (id, todo) => {
  router.push({
    name: 'DetailView',
    params: {
      id,
      todo: JSON.stringify(todo)
    }
  })
}
</script>

<style scoped>
#searchList {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 710px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
}
#searchList strong {
  font-size: 25px;
  color: goldenrod;
}
#searchList::-webkit-scrollbar {
  width: 10px;
}
#searchList::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
#searchList::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}
.no-result {
  text-align: center;
  font-weight: 600;
  margin-top: 2rem;
}
.card-title {
  font-weight: bold;
}
.card-text {
  font-weight: bold;
  color: #ccc;
}
.btn {
  font-size: 13px;
}
</style>
