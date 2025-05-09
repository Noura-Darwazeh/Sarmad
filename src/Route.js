import {
  MonthGamePage,
  HeroPage,
  MainLayout,
  CartPage,
  PaymentPage,
  UploadPage,
  FavPage,
  ViewPage,
  AboutUsPage,
  ThreeDCharacters1,
  ThreeDCharacters2,
  TwoDWeapons1,
  TwoDWeapons2,
  Stylesta,
} from "./pages";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import ThreeDWeapons from "./pages/ThreeDWeapons";
import ThreeDEnvironments from "./pages/ThreeDEnvironments";
import TwoDEnvironments from "./pages/TwoDEnvironments";
import TwoDCharacters1 from "./pages/TwoDCharacters1";
import TwoDCharacters2 from "./pages/TwoDCharacters2";
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
    path: "/view",
    element: <MainLayout PageToView={ViewPage} />,
  },
  {
    path: "/about",
    element: <MainLayout PageToView={AboutUsPage} />,
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
    path: "/three-d-characters1",
    element: <MainLayout PageToView={ThreeDCharacters1} />,
  },
  {
    path: "/three-d-characters2",
    element: <MainLayout PageToView={ThreeDCharacters2} />,
  },
  {
    path: "/two-d-weapons1",
    element: <MainLayout PageToView={TwoDWeapons1} />,
  },
  {
    path: "/two-d-weapons2",
    element: <MainLayout PageToView={TwoDWeapons2} />,
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
  {
    path: "/stylesta",
    element: <MainLayout PageToView={Stylesta} />,
  },
]);

export default routerConfig;
