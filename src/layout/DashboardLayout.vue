<template>
  <div>
    <Sidebar :isVisible="isVisible" />
    <main>
      <Header @toggleSidebar="toggleSidebar" />
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>