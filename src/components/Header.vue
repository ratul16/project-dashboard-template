<template>
  <div class="header shadow-sm">
    <div class="breadcrumb mb-0">
      <div class="toggle" :class="toggle ? 'expanded' : ''" @click="toggleSidebar()">
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <ol class="breadcrumb text-capitalize mb-0">
        <li class="breadcrumb-item text-muted">Pages</li>
        <li class="breadcrumb-item">{{ $route.name }}</li>
      </ol>
    </div>
    <div class="right-side">
      <div class="notification px-2">
        <!-- <i class="fa-solid fa-bell fa-shake"></i> -->
        <i class="fa-solid fa-bell"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.toggle = !this.toggle;
      this.$emit("toggleSidebar", this.toggle);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid $brand-color-light;
  margin-bottom: 15px;
  .breadcrumb {
    align-items: center;
    background-color: transparent;
    padding: 0;
    .toggle {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid $border-variant-5;
      margin-right: 10px;
      cursor: pointer;
      transition: $transition;

      &.expanded {
        rotate: 180deg;
        border-color: $brand-color;
      }
    }
  }
}
</style>