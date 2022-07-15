<template>
  <header>
    <div class="menu-esquerdo">
      <span>
        <button><RouterLink to="/">livros </RouterLink></button>
      </span>
      <span>|</span>
      <span>
        <button><RouterLink to="/jogadores">Jogadores</RouterLink></button>
      </span>
      <span>|</span>
      <span>
        <button><RouterLink to="/times">times</RouterLink></button>
      </span>
    </div>
    <button>
      <div class="menu-direito"><span>sair</span></div>
    </button>
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
</style>
