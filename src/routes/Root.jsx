import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import mainBackground from "../assets/main-background.png";

export default function Root() {
  return (
    <div
      className="flex justify-center min-h-dvh pb-4"
      style={{
        background: `url(${mainBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex max-w-[1200px] max-h-max lg:mt-20 mt-14 h-full w-full gap-y-3 lg:gap-x-7 flex-col lg:flex-row">
        <Aside />
        <div className="main-content relative overflow-auto h-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
