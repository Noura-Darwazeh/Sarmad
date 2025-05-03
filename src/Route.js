import { MonthGamePage } from "./pages/MonthGamePage";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }, {
        path: "/month-game", 
        element: <MonthGamePage />,
    }
]);

export default routerConfig;