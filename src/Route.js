import { MonthGamePage, HeroPage, MainLayout } from "./pages";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/month-game",
    element: <MainLayout PageToView={MonthGamePage} />,
  },
  {
    path: "/home",
    element: <MainLayout PageToView={HomePage} />,

  },
]);

export default routerConfig;
