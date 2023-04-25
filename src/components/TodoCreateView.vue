<template>
    <div id="create" class="input-group mb-3">
        <input v-model="todoTitle" type="text" class="form-control" placeholder="할 일을 입력하세요." aria-label="Example text with button addon" aria-describedby="button-addon1">
        <input v-model="todoTime" type="text" class="form-control" placeholder="예상 시간을 작성해보세요" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-success" type="button" id="button-addon1" @click="addTodo">추가</button>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const todoTitle = ref('');
    const todoTime = ref('');

    // 부모로 보낼 데이터 emit 정의
    const emit = defineEmits(['add']);
    
    // 클릭 이벤트 발생 시 emit으로 데이터 전달 후 input 값 비워주기
    const addTodo = () => {
        emit('add', todoTitle.value, todoTime.value)
        todoTitle.value = ''
        todoTime.value = ''
    }
</script>

<style scoped>
#create {
    padding: 2rem;
}
#create input {
    margin-right: 12px;
}
</style>