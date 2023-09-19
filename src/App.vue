<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 26px;
  }
}
</style>