import { MonthGamePage, HeroPage, MainLayout } from "./pages";
import { createBrowserRouter } from "react-router-dom";
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/month-game",
    element: <MainLayout PageToView={MonthGamePage} />,
  },
]);

export default routerConfig;
