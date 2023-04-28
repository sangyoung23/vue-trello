<template>
  <div id="app-view">
    <HeaderView></HeaderView>
    <div class="nav-display">
      <NavView></NavView>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderView from './components/HeaderView.vue'
import NavView from './components/NavView.vue';
</script>

<style scoped>
#app-view {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
#app-view .nav-display {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
