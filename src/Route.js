import {
  MonthGamePage,
  HeroPage,
  MainLayout,
  CartPage,
  PaymentPage,
  UploadPage,
  FavPage,
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
    path: "/upload",
    element: <MainLayout PageToView={UploadPage} />,
  },
  {
    path: "/log-in",
    element: <LogInPage />,
  },
  {
    path: "/favorite",
    element: <MainLayout PageToView={FavPage} />,
  },
]);

export default routerConfig;
