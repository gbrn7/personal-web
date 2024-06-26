import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error";
import Root from "./Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div className="text-zinc-300"></div>,
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
