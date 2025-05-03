import { MonthGamePage, HeroPage } from "./pages";
import { createBrowserRouter } from "react-router-dom";
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/month-game",
    element: <MonthGamePage />,
  },
]);

export default routerConfig;
