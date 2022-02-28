import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/collections",
    name: "collections",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },

  {
    path: "/men",
    name: "men",

    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },

  {
    path: "/women",
    name: "women",

    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },

  {
    path: "/about",
    name: "about",

    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },

  {
    path: "/contact",
    name: "contact",

    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
