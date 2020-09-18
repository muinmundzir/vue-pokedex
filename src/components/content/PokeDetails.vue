<template>
  <div class="container">
    <div class="modal">
      <div class="modal-header">
        <h3>Pokemon Information</h3>
        <span @click="$emit('close')">&times;</span>
      </div>
      <div class="modal-body">
        <img :src="pokemon.sprites.front_default" alt class="poke-image" />
        <div class="poke-info">
          <h4>{{ pokemon.name | uppercase-first}}</h4>
          <p>Weight: {{ pokemon.weight | normalize-value }} kg, Height: {{ pokemon.height | normalize-value }} m</p>
          <small>
            Type:
            <span
              v-for="type in pokemon.types"
              :key="type.index"
              class="poke-type"
            >{{ type.type.name }}</span>
          </small>
          <p class="description">
            <u>Description:</u>
          </p>
          <p>{{ description[1] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { pokemon: Object },
  data() {
    return {
      description: [],
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/" + this.pokemon.name)
      .then((res) => {
        const results = res.data.flavor_text_entries;
        results.forEach((result) => {
          this.description.push(result.flavor_text);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  border-radius: 10px;
}

.modal-header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ff001f;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 0.5rem;
}

.modal-header h3 {
  font-size: 22px;
  font-weight: normal;
}

.modal-header span:hover {
  cursor: pointer;
  font-weight: bold;
}

.modal-body {
  padding: 1rem;
  display: flex;
}

.poke-image {
  height: 200px;
  width: 200px;
}

.poke-info {
  padding: 20px;
}

.poke-info h4 {
  font-size: 20px;
  letter-spacing: 2px;
}

.poke-info p {
  font-size: 15px;
}

.poke-type {
  background-color: rgb(168, 160, 160);
  margin: 2px;
  padding: 3px;
  border-radius: 4px;
  color: white;
}

.description {
  margin-top: 10px;
  font-size: 18px;
  white-space: pre-wrap;
}

@media only screen and (max-width: 768px) {
  .modal {
    width: 70%;
  }

  .modal-header {
    align-content: center;
  }

  .modal-header h3 {
    font-size: 16px;
  }

  .modal-header span {
    font-size: 20px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
  }

  .poke-image {
    margin: auto;
  }

  .poke-info h4 {
    margin-bottom: 15px;
    letter-spacing: 1px;
  }

  .poke-info p,
  span,
  small {
    font-size: 12px;
    margin-bottom: 10px;
  }
}
</style>