<template>
    <div id="nav">
        <router-link class="title" to="/">
            <span style="color: red">T</span>
            <span style="color: orange">R</span>
            <span style="color: yellow">E</span>
            <span style="color: green">L</span>
            <span style="color: blue">L</span>
            <span style="color: purple">O</span>
        </router-link>
        <div>
            <i class="bi bi-list-check"></i>
            <router-link to="/list">List</router-link>
        </div>
        <div>
            <i class="bi bi-caret-right-square"></i>
            <router-link to="/ongoing">Doing</router-link>
        </div>
        <div>
            <i class="bi bi-check2-square"></i>
            <router-link to="/completion">Done</router-link>
        </div>
        <div>
            <i class="bi bi-search"></i>
            <router-link to="/search">Search</router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#nav {
    width: 15%;
    height: calc(100vh - 70px);
    padding: 25px;
    background-color: #0066ff;
}
#nav .title {
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 1.1rem;
    text-decoration: none;
    color: white;
}
#nav div {
    display: flex;
    align-items: center;
    margin: 50px 0;
    padding: 10px;
    transition: all 0.7s;
}
#nav div:hover {
    border-radius: 10px;
    background-color: #ccc;
}
#nav div:hover i
 {
    color: black;
}
#nav div i {
    font-size: 1.6rem;
    margin-right: 15px;
    color: white;
}
#nav div a {
    font-size: 1.8rem;
    text-decoration: none;
    color: white;
}
</style>