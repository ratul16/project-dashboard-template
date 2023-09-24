<template>
  <aside class="sidebar shadow-sm" :class="isVisible ? 'expanded' : ''">
    <div class="logo" @click="toggleSidebar()">
      <!-- need to fix asset url handling -->
      <svg viewBox="0 0 99 95">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.5611 4.13525C48.3135 2.86203 50.6865 2.86203 52.4389 4.13525L94.0611 34.3755C95.8135 35.6487 96.5468 37.9056 95.8774 39.9657L79.9792 88.8955C79.3098 90.9556 77.39 92.3504 75.2239 92.3504L23.7761 92.3504C21.61 92.3504 19.6902 90.9556 19.0208 88.8955L3.12257 39.9657C2.4532 37.9056 3.18649 35.6487 4.93893 34.3755L46.5611 4.13525Z"
          fill="#252525"
          stroke="#DC3545"
          stroke-width="5"
        />
        <path
          d="M33.8633 70.3504V67.0281L38.1611 66.2898V36.0467L33.8633 35.3084V31.9861H50.9756C53.7705 31.9861 56.126 32.408 58.042 33.2517C59.9756 34.0779 61.4434 35.282 62.4453 36.864C63.4473 38.4461 63.9482 40.3797 63.9482 42.6648C63.9482 44.9148 63.4561 46.8045 62.4717 48.3338C61.5049 49.8631 60.125 51.0232 58.332 51.8142C56.5391 52.5877 54.4121 53.0008 51.9512 53.0535L43.3555 53.2117V66.2898L47.6533 67.0281V70.3504H33.8633ZM59.2021 70.3504L50.6592 51.1814L55.8535 51.1287L62.9463 66.4744L65.6094 66.949V70.3504H59.2021ZM43.3555 49.1248H50.4482C53.3486 49.1248 55.458 48.5711 56.7764 47.4637C58.0947 46.3562 58.7539 44.739 58.7539 42.6121C58.7539 40.5906 58.1211 38.991 56.8555 37.8133C55.5898 36.6355 53.6299 36.0467 50.9756 36.0467H43.3555V49.1248Z"
          fill="#DC3545"
        />
      </svg>
      <h5 class="item-text mb-0">Dashboard</h5>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'dashboard' }" class="nav-link">
          <i class="fa-solid fa-chart-pie"></i>
          <span class="item-text">Dashboard</span>
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link :to="{ name: 'booking' }" class="nav-link">
          <i class="fa-solid fa-folder"></i>
          <span class="item-text">Booking</span>
        </router-link>
      </li> -->
      <li class="nav-item">
        <router-link :to="{ name: 'profile' }" class="nav-link">
          <i class="fa-solid fa-user"></i>
          <span class="item-text">Profile</span>
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link :to="{ name: 'billing' }" class="nav-link">
          <i class="fa-solid fa-credit-card"></i>
          <span class="item-text">Billing</span>
        </router-link>
      </li> -->
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
      if (this.isVisible) {
        this.$emit("toggle", false);
      }
    },
    getImageUrl(url) {
      return new URL(url, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
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

  &::before {
    position: absolute;
    contain: " ";
    width: 40px;
    height: 40px;
    background-color: red;
    top: 0;
    z-index: 100;
    right: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 0 0 26px 12px;
    // max-width: 40px;
    // width: 100%;
    svg {
      width: 40px;
      height: 40px;
    }
    .item-text {
      display: none;
      margin-left: 16px;
      transition: $transition;
    }
    // .close {
    //   width: 30px;
    //   height: 30px;
    //   border-radius: 50%;
    //   display: grid;
    //   place-items: center;
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   color: $white;
    //   background-color: red;
    // }
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
      display: block;
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

@include media-queries("tab-sm") {
  .sidebar {
    position: absolute;
    z-index: 99;
    left: calc(-32px - $sidebar-icon-width);
    &.expanded {
      left: 0;
    }
  }
}
</style>