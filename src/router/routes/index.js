import appRoutes from "./app-routes";
import authRoutes from "./auth-routes";
import gamesRoutes from "./games-routes";
import notFoundRoutes from "./notFound-routes";

const routes = [...appRoutes, ...authRoutes, ...gamesRoutes, ...notFoundRoutes];

export default routes;
