<template>
  <div class="card">
    <img :src="pokemon.sprites.front_default" class="card-image" @click="showDetails = true" />
    <div class="card-info">
      <p>{{ pokemon.name | uppercase-first}}</p>
      <span>#{{ pokemon.id }}</span>
    </div>

    <transition name="fade" mode="in-out">
      <app-poke-details v-if="showDetails" @close="showDetails = false" :pokemon="pokemon"></app-poke-details>
    </transition>
  </div>
</template>

<script>
import PokeDetails from "./PokeDetails.vue";

export default {
  data() {
    return {
      showDetails: false,
    };
  },
  components: {
    appPokeDetails: PokeDetails,
  },
  props: {
    pokemon: Object,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding: 1rem;
  margin: 1rem;
  background: white;
  border-radius: 5px;
  box-shadow: 3px 3px 6px -1px rgba(0, 0, 0, 0.75);
}

.card-image {
  width: 150px;
  height: 150px;
  margin: auto;
  cursor: pointer;
}

.card-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.card-info p,
.card-info span {
  font-size: 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>