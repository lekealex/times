import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimesViewVue from "../views/TimesView.vue";
import JogadoresViewVue from "../views/JogadoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/times",
      name: "times",
      component: TimesViewVue,
    },
    {
      path: "/jogadores",
      name: "jogadores",
      component: JogadoresViewVue,
    },
  ],
});

export default router;
