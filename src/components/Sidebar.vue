<template>
  <aside class="sidebar shadow-sm" :class="isVisible ? 'expanded' : ''">
    <div class="logo" @click="toggleSidebar()">
      <img src="@/assets/images/logo.png" alt="" srcset="" />
      <h5 class="item-text mb-0">Dashboard</h5>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'dashboard' }" class="nav-link">
          <i class="fa-solid fa-chart-pie"></i>
          <span class="item-text">Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'booking' }" class="nav-link">
          <i class="fa-solid fa-folder"></i>
          <span class="item-text">Booking</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'profile' }" class="nav-link">
          <i class="fa-solid fa-user"></i>
          <span class="item-text">Profile</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'billing' }" class="nav-link">
          <i class="fa-solid fa-credit-card"></i>
          <span class="item-text">Billing</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: false,
      siteName: import.meta.env.VITE_SITE_NAME,
    };
  },
  methods: {
    toggleSidebar() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background: $brand-color-light;
  width: calc(32px + $sidebar-icon-width);
  min-height: 100vh;
  padding: 16px 0;
  transition: $transition;
  overflow: hidden;
  border-radius: 0 15px 15px 0;
  // border: 1px solid $border-variant-4;
  font-size: 14px;

  .logo {
    display: flex;
    align-items: center;
    margin: 0 0 26px 12px;
    max-width: 40px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    .item-text {
      opacity: 0;
      margin-left: 16px;
      transition: $transition;
    }
  }

  .navbar-nav {
    // gap: 10px;
    .nav-link {
      padding: 12px 20px;
      display: flex;
      align-items: center;
      color: inherit;
      transition: $transition;
      i {
        font-size: 20px;
        margin-right: 16px;
        transition: $transition;
      }
      .item-text {
        opacity: 0;
        margin-left: 16px;
        transition: $transition;
      }
      &:hover {
        // background-color: $brand-color;
        i {
          color: $brand-color-dark;
        }
        .item-text {
          color: $brand-color-dark;
        }
      }
    }
  }

  &.expanded {
    width: $sidebar-width;
    .item-text {
      opacity: 1;
    }
    .navbar-nav {
      .nav-link {
        .item-text {
          opacity: 1;
        }
      }
    }
  }
}

// @include media-queries("tab-sm") {
//   .sidebar {
//     position: absolute;
//     z-index: 99;
//   }
// }
</style>