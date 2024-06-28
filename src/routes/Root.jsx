import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import mainBackground from "../assets/main-background.png";
import contentBackground from "../assets/main-content-background.png";

export default function Root() {
  return (
    <div
      className="flex justify-center min-h-dvh pb-4"
      style={{
        background: `url(${mainBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex max-w-[1200px] max-h-max transition-all ease-in-out duration-500 lg:mt-20 mt-3 h-full w-full gap-y-4 p-3 lg:p-0 lg:gap-x-5 flex-col lg:flex-row">
        <Aside />
        <div
          className="main-content w-full bg-left-top bg-fixed relative  h-full backdrop-blur-lg bg-opacity-30 border border-gray-500 rounded-xl overflow-hidden backdrop-filter "
          style={{
            background: `url(${contentBackground})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
