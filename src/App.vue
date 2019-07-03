<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
<style>
@import "./assets/css/global.css";

#app {
  height: 100vh;
}
</style>
