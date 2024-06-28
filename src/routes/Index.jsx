import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error";
import Root from "./Root";
import About from "../pages/About/Index";
import Portofolio from "../pages/Portofolio/Index";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/portofolio",
        element: <Portofolio />,
      },
      {
        path: "/contact",
        element: <div className="">Contact</div>,
      },
    ],
  },
]);

export default Router;
