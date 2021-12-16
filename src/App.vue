<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/layouts/HeaderComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/main.scss";
</style>
