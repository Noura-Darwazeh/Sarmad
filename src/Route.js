import { MonthGamePage, HeroPage, MainLayout, CartPage } from "./pages";
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
  {
    path: "/cart",
    element: <MainLayout PageToView={CartPage} />,
  },
]);

export default routerConfig;
