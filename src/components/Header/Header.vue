<template>
  <header>
    <router-link to="/" class="logo">
      <img alt="Vue logo" src="../../assets/sw-logo.png">
    </router-link>
    <nav>
      <router-link to="/people">People</router-link>
      <router-link to="/">Planets</router-link>
      <router-link to="/">Films</router-link>
      <router-link to="/">Species</router-link>
      <router-link to="/">Vehicles</router-link>
      <router-link to="/">Starships</router-link>
    </nav>
  </header>
</template>
<style lang="postcss" scoped>
header {
  display: flex;
  flex-flow: column;
}

logo {
  width: 100%;
  height: 80px;
}

img {
  width: 100%;
}
nav {
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 50px;
  & a:hover {
    font-size: 2.2rem;
    color: yellow;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
}

@media (min-width: 768px) {
  header {
    flex-flow: row;
  }
  .logo {
    max-width: 200px;
  }
  nav {
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;
    height: 80px;
    & a:hover {
      font-size: 2.4rem;
      color: yellow;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
  }
}
</style>
