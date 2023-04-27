<template>
  <div id="app-view">
    <HeaderView></HeaderView>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderView from './components/HeaderView.vue'
</script>

<style scoped>
#app-view {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>
