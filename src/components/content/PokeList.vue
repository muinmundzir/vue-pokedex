<template>
  <div>
    <div class="input">
      <input type="text" placeholder="Search" v-model="name" @keyup="filteredPokemon" />
    </div>
    <div class="card-list">
      <app-poke v-for="pokemon in filteredPokemon" :key="pokemon.url" :pokemon="pokemon"></app-poke>
    </div>
  </div>
</template>

<script>
import Poke from "./Poke.vue";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      pokemons: [],
    };
  },
  computed: {
    filteredPokemon() {
      const name = this.name;
      return this.pokemons.filter((pokemon) => {
        return (
          !name || pokemon.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
      });
    },
  },
  components: {
    appPoke: Poke,
  },
  created() {
    const pokemons_number = 200;
    const fetchPokemons = async () => {
      for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
      }
    };
    const getPokemon = async (id) => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((res) => {
          this.pokemons.push(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchPokemons();
  },
};
</script>

<style scoped>
input {
  border: none;
  padding: 0.25rem;
  width: 100%;
  border-bottom: 2px solid #000;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(223, 220, 220);
}

input:focus {
  border-bottom: 2px solid #ff001f;
  outline: none;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>