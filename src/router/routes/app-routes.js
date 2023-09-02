import HomePage from "@/pages/HomePage.vue";

const appRoutes = [
  {
    path: "/",
    alias: "/home",
    component: HomePage,
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("@/pages/InfoPage.vue"),
  },

  {
    path: "/user",
    name: "User",
    component: () => import("@/pages/UserPage.vue"),
  },
];

export default appRoutes;
