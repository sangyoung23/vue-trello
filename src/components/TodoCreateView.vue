<template>
    <div id="create" class="input-group mb-3">
        <input v-model="todos.option1" type="text" class="form-control" placeholder="할 일을 입력하세요." aria-label="Example text with button addon" aria-describedby="button-addon1">
        <input v-model="todos.option2" type="text" class="form-control" placeholder="예상 시간을 작성해보세요" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-success" type="button" id="button-addon1" @click="store.addList(todos)">추가</button>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useListStore} from '../stores/list'

// 할 일과 예상시간 store로 전달할 때 담을 객체
const todos = reactive({
    option1 : '',
    option2: ''
})

const store = useListStore();

</script>

<style scoped>
#create {
    padding: 2rem;
}
#create input {
    margin-right: 12px;
}
</style>