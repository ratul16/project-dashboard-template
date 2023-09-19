<template>
  <aside class="navbar navbar-expand-lg navbar-light brand-nav shadow-sm border">
    <div class="logo">
      <img src="@/assets/images/logo" alt="" srcset="" />
    </div>
    <div class="menu-toggle-wrapper">
      <button class="menu-toggle">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <nav>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'dashboard' }" class="nav-link"> Dashboard </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'profile' }" class="nav-link"> profile </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
// import imgUrl from "./assets/img.png";
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.brand-nav {
  background-color: $white;
  i {
    color: $brand-color-3;
  }
  .navbar-brand {
    width: 45px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .navbar-toggler {
    padding-inline: 10px;
    // border: none;
    transition: $transition !important;
    .navbar-toggler-icon {
      background-image: none;
      width: auto;
      height: auto;
      font-family: FontAwesome;
      font-size: 24px;
    }
    .navbar-toggler-icon::before {
      content: "\f00d";
    }
    &.collapsed {
      .navbar-toggler-icon::before {
        content: "\f0c9";
      }
    }

    &:focus {
      box-shadow: none;
    }
  }
}
</style>