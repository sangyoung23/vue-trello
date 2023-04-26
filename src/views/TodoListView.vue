<template>
    <div id="todoList">
        <strong>
            To do
        </strong>
        <div class="status">
            <p>TOTAL :  {{ store.list.length }}</p>
            <p>예상 시간 : 0</p>
            <p>미등록 : {{ store.list.length }}</p>
        </div>
        <div class="card mb-2" v-for="todo in list" :key="todo">
            <div class="card-body">
                <h5 class="card-title mb-3">{{ todo.title }}</h5>
                    <p class="card-text">{{ todo.time }} H</p>
                    <!-- <p class="card-text">{{ todo.date }}</p> -->
                    <button class="btn btn-success me-1" @click="goDetail(todo.id, todo)">자세히 보기</button>
                    <button class="btn btn-danger" @click="removeTodo(todo)">삭제</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useListStore } from '../stores/list';
import { storeToRefs } from 'pinia';
import {useRouter} from 'vue-router'
import {} from 'vue'

const router = useRouter();
const store = useListStore()
const { list } = storeToRefs(store)



const goDetail = (id,todo) => {
    router.push({
        name: 'DetailView',
        params: {
            id,
            todo: JSON.stringify(todo)
        }
    })
}

const removeTodo = (todo) => {

    const array = Object.entries(todo)

console.log(array)



}


</script>

<style scoped>
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
#todoList {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 710px;
    padding: 15px;
    border-radius: 5px;
    background-color: #fff;
}
  #todoList::-webkit-scrollbar {
    width: 10px;
  }
  #todoList::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  #todoList::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
#todoList strong {
    font-size: 22px;
    color: tomato;
}
#todoList .list-box {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: #fff;
}
#todoList .list-box .title {
    display: flex;
    justify-content: center;
    width: 70px;
    border-radius: 7px;
    background-color: #0066ff;
}
#todoList .list-box .title h1 {
    font-size: 17px;
    font-weight: bold;
    color: white;
}
#todoList .status {
    display: flex;
    justify-content: space-around;
    margin-top: 1.2rem;
}
#todoList .status p:nth-child(1) {
    font-weight: bold;
    color: #0066ff;
}
#todoList .status p:nth-child(2) {
    font-weight: bold;
    color: green;
}
#todoList .status p:nth-child(3) {
    font-weight: bold;
    color: coral;
}
</style>