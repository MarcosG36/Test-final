<template>
  <navBar />
  <dashBoard />

  <router-view></router-view>
</template>

<script>
import navBar from "./components/navBar.vue";
import dashBoard from "./components/dashBoard.vue";

/* import mainContent from './components/mainContent.vue';/*  */

export default {
  name: "App",
  components: {
    navBar,
    dashBoard,
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
