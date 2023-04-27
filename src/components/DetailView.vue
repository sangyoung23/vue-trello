<template>
  <div>
    Detail
    {{ todo.option1 }}
    {{ todo.option2 }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const todo = JSON.parse(route.params.todo)

console.log(route.params)
</script>

<style scoped></style>
