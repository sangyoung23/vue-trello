<template>
    <div id="todoList">
        <strong>
            To do
        </strong>
        <div class="status">
            <p>TOTAL :  0</p>
            <p>예상 시간 : 0</p>
            <p>미등록 : 1</p>
        </div>
        <ul class="list-box" v-for="item in props.todoList" :key="item">
            <li>
                <h4>{{ item.title }}</h4>
                <div>
                    <p>{{ item.time }} H</p>
                    <p>{{ item.date }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

// HomeView 컴포넌트에서 넘어온 todoList를 받기위해 props 정의
const props = defineProps({
    todoList: {
        title: String,
        time: Number
    }
})

// 넘어온 데이터 ref로 정의
const itemList = ref([
    {
        title: '',
        time: ''
    },
])


const fetchList = () => {
    itemList.value.title = props.todoList.title,
    itemList.value.time = props.todoList.time
    console.log(itemList.value)
}

watchEffect(fetchList)





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