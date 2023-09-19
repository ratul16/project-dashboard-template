import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: () => import("../views/HomeView.vue"),
    // },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/booking",
      name: "booking",
      component: () => import("../views/Profile.vue"),
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: "/billing",
      name: "billing",
      component: () => import("../views/Profile.vue"),
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
      // meta: {
      //   requiresAuth: true,
      // },
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
