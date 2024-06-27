import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error";
import Root from "./Root";
import About from "../pages/About/Index";

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
        path: "/resume",
        element: <div className="">Resume</div>,
      },
      {
        path: "/portofolio",
        element: <div className="">Portofolio</div>,
      },
      {
        path: "/blogs",
        element: <div className="">Blogs</div>,
      },
      {
        path: "/contact",
        element: <div className="">Contact</div>,
      },
    ],
  },
]);

export default Router;
