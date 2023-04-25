<template>
    <div id="todoList">
        <strong>
            To do
        </strong>
        <div class="status">
            <p>TOTAL : 0</p>
            <p>예상 시간 : 3H</p>
            <p>미등록 : 1</p>
        </div>
        <div>
            <p>Todo Item</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#todoList {
    width: 350px;
    height: 550px;
    padding: 15px;
    border-radius: 5px;
    background-color: #ebebeb;
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