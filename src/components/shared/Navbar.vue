<template>
  <nav>
    <img src="../../assets/pokemon.svg" alt="Pokemon Logo" />
    <a href="#">Pokédex</a>
    <li>
      <a href="#" @click="showAbout = true">About</a>
    </li>

    <transition name="fade" mode="out-in">
      <app-about v-if="showAbout" @close="showAbout = false"></app-about>
    </transition>
  </nav>
</template>

<script>
import About from "./About.vue";
export default {
  data() {
    return {
      showAbout: false,
    };
  },
  components: {
    appAbout: About,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  background-color: #ff001f;
  width: 100%;
  height: 50px;
  padding: 1rem;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 24px;
  padding: 0.75rem;
}

nav a:hover {
  background-color: white;
  color: #ff001f;
  border-bottom: 3px solid #ff001f;
}

nav li {
  margin: 0 0 0 auto;
  list-style-type: none;
}

li a {
  text-decoration: none;
  font-size: 20px;
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>