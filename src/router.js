import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/resources",
      name: "resources",
      component: () =>
        import(/* webpackChunkName: "resources" */ "./views/Resources.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/Users.vue")
    },
    {
      path: "/tags",
      name: "tags",
      component: () => import(/* webpackChunkName: "tags" */ "./views/Tags.vue")
    }
  ],
  linkActiveClass: "active"
});
