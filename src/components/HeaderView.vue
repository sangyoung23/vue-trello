<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
    <div class="container-fluid">
      <router-link class="nav-link active" to="/">
        <span>T</span>
        <span>r</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 255, 0.1);
}
.navbar a span:nth-child(1) {
  font-size: 30px;
  font-weight: bold;
  color: red;
}
.navbar a span:nth-child(2) {
  font-size: 30px;
  font-weight: bold;
  color: tomato;
}
.navbar a span:nth-child(3) {
  font-size: 30px;
  font-weight: bold;
  color: green;
}
.navbar a span:nth-child(4) {
  font-size: 30px;
  font-weight: bold;
  color: yello;
}
.navbar a span:nth-child(5) {
  font-size: 30px;
  font-weight: bold;
  color: blue;
}
.navbar a span:nth-child(6) {
  font-size: 30px;
  font-weight: bold;
  color: purple;
}
</style>
