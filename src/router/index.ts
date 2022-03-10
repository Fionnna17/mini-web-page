import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/history",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/History.vue"),
  },
  {
    path: "/action",
    name: "Action",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Action.vue"),
  },
  {
    path: "/contactMe",
    name: "ContactMe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactMe.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
