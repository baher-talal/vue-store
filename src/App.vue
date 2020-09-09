<template>
  <div id="app">
    <main>
      <Header :counter="counter"/>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {

  data: () => ({
    counter: 0,
  }),

  components: {
    Header,
  }
};
</script>

<style scoped>
@import "../src/assets/css/all.min.css";
@import "../src/assets/css/bootstrap.min.css";
@import "../src/assets/css/style.css";
</style>
