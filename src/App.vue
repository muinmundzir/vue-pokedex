<template>
  <div class="app">
    <app-navbar></app-navbar>
    <div class="content">
      <app-poke-list></app-poke-list>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";
import PokeList from "./components/content/PokeList.vue";

export default {
  components: {
    appNavbar: Navbar,
    appPokeList: PokeList,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(223, 220, 220);
}

.content {
  display: flex;
  flex-direction: column;
  margin: 2rem 1.5rem;
}
</style>