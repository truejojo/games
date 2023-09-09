const gamesRoutes = [
  {
    path: "/games",
    name: "Games",
    component: () => import("@/pages/GamesPage.vue"),
    children: [
      {
        path: "/alphabet",
        name: "Alphabet",
        component: () => import("@/pages/games/AlphabetPage.vue"),
      },
      {
        path: "/letters",
        name: "Letters",
        component: () => import("@/pages/games/LettersPage.vue"),
      },
      {
        path: "/numbers",
        name: "Numbers",
        component: () => import("@/pages/games/NumbersPage.vue"),
      },
      {
        path: "/timesOne",
        name: "TimesOne",
        component: () => import("@/pages/games/TimesOnePage.vue"),
      },
    ],
  },
];

export default gamesRoutes;
