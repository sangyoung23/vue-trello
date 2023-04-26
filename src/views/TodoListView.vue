<template>
    <div id="todoList">
        <strong>
            To do
        </strong>
        <div class="status">
            <p>TOTAL :  {{ store.list.length }}</p>
            <p>예상 시간 : 0</p>
            <p>미등록 : </p>
        </div>
        <ul class="list-box" v-for="todo in store.list" :key="todo">
            <li>{{ todo.option1 }} {{ todo.option2 }} {{ todo.date }}</li>
        </ul>
    </div>
</template>

<script setup>
import { useListStore } from '../stores/list';
import {computed} from 'vue';

const store = useListStore()

// const noTime = computed(() => {
//     store.list.option2 ? nul
// })

</script>

<style scoped>
#todoList {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 550px;
    padding: 15px;
    border-radius: 5px;
    background-color: #fff;
}
#todoList strong {
    font-size: 22px;
    color: tomato;
}
#todoList .list-box {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: #fff;
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