const gamesRoutes = [
  {
    path: "/games",
    name: "Games",
    component: () => import("@/pages/GamesPage.vue"),
  },
];

export default gamesRoutes;
