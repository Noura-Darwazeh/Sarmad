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
import ThreeDWeapons from "./pages/ThreeDWeapons";
import ThreeDEnvironments from "./pages/ThreeDEnvironments"
import TwoDEnvironments from "./pages/TwoDEnvironments"
import TwoDCharacters1 from "./pages/TwoDCharacters1"
import TwoDCharacters2 from "./pages/TwoDCharacters2"
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
  {
    path: "/three-d-weapons",
    element: <MainLayout PageToView={ThreeDWeapons} />,
  },
  {
    path: "/three-d-environments",
    element: <MainLayout PageToView={ThreeDEnvironments} />,
  },
  {
    path: "/two-d-environments",
    element: <MainLayout PageToView={TwoDEnvironments} />,
  },
  {
    path: "/two-d-characters1",
    element: <MainLayout PageToView={TwoDCharacters1} />,
  },
  {
    path: "/two-d-characters2",
    element: <MainLayout PageToView={TwoDCharacters2} />,
  },
]);

export default routerConfig;
