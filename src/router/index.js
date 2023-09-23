import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        layout: true
      },
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("../views/BookingView.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/billing",
      name: "billing",
      component: () => import("../views/Profile.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
      meta: {
        layout: true
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
  ],
});

export default router;
