<template>
  <div id="header">
    <div></div>
    <div></div>
    <div></div>
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 15px;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
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
#header a {
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-left: 2rem;
}
#header a:hover {
  color: tomato;
}
</style>
