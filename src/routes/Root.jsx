import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="flex justify-center min-h-dvh h-full w-full items-center p-3 gap-x-7">
      <Aside />
      <div className="main-content relative max-h-max h-full ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
