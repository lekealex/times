<template>
  <header>
    <div class="menu-esquerdo">
      <span>
        <button><RouterLink to="/">Autor</RouterLink></button>
      </span>
      <span>|</span>
      <span>
        <button><RouterLink to="/jogadores">Recomendados</RouterLink></button>
      </span>
      <span>|</span>
      <span>
        <button><RouterLink to="/times">livros</RouterLink></button>
      </span>
    </div>
    <span>
      <button>
        <div class="menu-direito"><span>sair</span></div>
      </button>
    </span>
  </header>
</template>

<style>
header span {
  padding: 0 10px;
}

header {
  background-color: rgb(34, 45, 65);
  height: 15%;
  font-size: 1.3rem;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  justify-content: space-between;
}

button {
  border-radius: 13px;
  width: 120px;
  height: 27px;
}
</style>
