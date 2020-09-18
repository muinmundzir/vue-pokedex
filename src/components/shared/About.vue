<template>
  <div class="container">
    <div class="modal">
      <div class="modal-header">
        <h3>About</h3>
        <span @click="$emit('close')">&times;</span>
      </div>
      <div class="modal-body">
        <h4>Vue-Pokédex</h4>
        <p>
          Made by
          <a href="https://github.com/muinmundzir">M. Mu'in Mundzir</a> to finish weekly project by The Poppers Family
        </p>
        <ul>
          <li>
            Built with
            <a href="https://vuejs.org/">Vue.js</a>
          </li>
          <li>
            Data and sprites from the
            <a href="https://pokeapi.co/">https://pokeapi.co/</a> and
            <a href="http://pokemondb.net/">http://pokemondb.net/</a>.
          </li>
          <li>
            Inspiration from
            <a href="https://www.pokedex.org/">https://www.pokedex.org/</a>.
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p>All content is ©Nintendo, Game Freak, and The Pokémon Company.</p>
    </div>
  </div>
</template>

<script>
export default {};
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
  padding: 2rem;
}

.modal-body h4 {
  margin-bottom: 15px;
}

.modal-body p {
  font-weight: normal;
  margin-bottom: 5px;
}

.modal-body ul {
  margin-left: 30px;
  font-size: 14px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: #ff001f;
  color: white;
}

.footer p {
  padding: 0.5rem;
  font-size: 13px;
  font-weight: normal;
}

@media only screen and (max-width: 768px) {
  .modal {
    width: 70%;
  }

  .modal-header h3 {
    font-size: 16px;
  }

  .modal-body p,
  li {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .footer {
    height: 40px;
    align-items: center;
  }

  .footer p {
    font-size: 10px;
  }
}
</style>