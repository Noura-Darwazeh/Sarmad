import {
  MonthGamePage,
  HeroPage,
  MainLayout,
  CartPage,
  PaymentPage,
} from "./pages";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";

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
  {
    path: "/cart",
    element: <MainLayout PageToView={CartPage} />,
  },
  {
    path: "/pay",
    element: <MainLayout PageToView={PaymentPage} />,
  },
  {
    path: "/log-in",
    element: <LogInPage/>,
  },
]);

export default routerConfig;
