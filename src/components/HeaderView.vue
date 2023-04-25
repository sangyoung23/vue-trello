<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Trello</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
      </ul>
      <form class="d-flex justify-content-end" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script setup>

</script>

<style scoped>
.navbar {
    background-color: rgba(0, 0, 255, 0.1);
}
</style>