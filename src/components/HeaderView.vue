<template>
  <div id="header">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup></script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 15px;
  background-color: #cccc;
}
#header div:nth-child(1) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: red;
}
#header div:nth-child(2) {
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: orange;
}
#header div:nth-child(3) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: green;
}
</style>
