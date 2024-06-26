import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex justify-center min-h-dvh h-full w-full items-center p-3">
      <Aside />
      <div className="main-content max-h-max h-full">
        <Outlet />
      </div>
    </div>
  );
}
