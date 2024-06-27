import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { contactItems, socmedItems } from "../constants/Index";
import memoji from "../assets/male_memoji.png";
import asideBackground from "../assets/aside-background.png";

export default function Aside() {
  const [toggleIdentityIsOpen, setToggleIdentityIsOpen] = useState(false);
  return (
    <div
      className="max-h-max border border-zinc-500 h-full p-5 rounded-xl flex flex-col lg:gap-y-9 gap-y-8 backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all ease-in-out duration-500 lg:w-3/6"
      style={{
        background: `url(${asideBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="btn absolute flex items-center justify-center right-3 top-3 p-3 rounded-lg bg-gradient-to-l from-purple-500 to-purple-900 lg:hidden"
        onClick={() => setToggleIdentityIsOpen(!toggleIdentityIsOpen)}
      >
        <FaChevronDown
          className={`${
            toggleIdentityIsOpen && "rotate-180"
          } transition-all ease-in-out duration-500`}
        />
      </div>
      <div className="header-info flex lg:flex-col lg:gap-y-7 gap-x-5 items-center">
        <div className="img-wrapper p-1 bg-gradient-to-r from-purple-500 to-purple-900 backdrop-filter backdrop-blur-lg backdrop-fil w-[150px] rounded-3xl">
          <img src={memoji} alt="emoji" className="object-cover w-full" />
        </div>
        <div className="identity-info flex flex-col lg:items-center">
          <h3 className="font-semibold text-base lg:text-sm md:text-xl lg:text-center">
            Muhammad Rayhan Gibran
          </h3>
          <p
            className="personal-title text-xs
            bg-gray-600 text-center rounded-md font-light mt-3 max-w-max px-3 py-2 bg-gradient-to-r bg-purple-800"
          >
            Fullstack Web Developer
          </p>
        </div>
      </div>
      <hr className="border-t-1 border-zinc-500 hidden lg:block" />
      <div
        className={`contact-wrapper transition-all lg:h-52 overflow-hidden ease-in-out duration-500 ${
          toggleIdentityIsOpen ? "h-52" : "h-0"
        } lg:block `}
      >
        <div className="main-contact transition-all ease-in-out duration-500 grid grid-cols-1 gap-4">
          {contactItems.map((item, index) => (
            <div className="contact flex w-full gap-x-3" key={index}>
              <div className="icon-wrapper px-3 h-10 w-10 grid bg-gradient-to-r from-purple-500 to-purple-900 place-content-center  rounded-lg ">
                {item.icon}
              </div>
              <div className="contact email w-full flex flex-col gap-y-1 overflow-hidden">
                <label className="text-xs font-light text-zinc-300">
                  {item.label}
                </label>
                <a href={item.href} className="text-sm font-medium truncate">
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="socmed-wrapper transition-all ease-in-out duration-500 mt-8 flex lg:justify-center gap-3 items-center">
          {socmedItems.map((item, index) => (
            <a href={item.href} key={index}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
