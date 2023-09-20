<template>
  <div id="app">
    <Sidebar :isVisible="isVisible" />
    <main>
      <Header @toggleSidebar="toggleSidebar" />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleSidebar(value) {
      this.isVisible = value;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 16px;
  }
}
</style>