<template>
  <div class="detail">
    <h1 >{{ attr }}</h1>
    {{ todo.option1 }}
    {{ todo.option2 }}
    <select @change="changeAttr($event)" class="form-select" aria-label="Default select example" v-model="attr">
      <option>doing</option>
      <option>done</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const todo = JSON.parse(route.params.todo)
const attr = ref('');

const done = ref('')
const doing = ref('')

const changeAttr = (event) => {
    if (event.target.value === 'done') {
        todo.attr = true
        console.log('완료',todo.attr)
    } else if (event.target.value === 'doing') {
        todo.attr = false
        console.log('진행중',todo.attr)
    }
}

const init = () => {
    todo.attr ? done.value = 'done' : doing.value = 'doing'
}
init()


</script>

<style scoped></style>
