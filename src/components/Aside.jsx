import memoji from "../assets/male_memoji.png";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

export default function Aside() {
  const [toggleIdentity, setToggleIdentity] = useState(false);
  return (
    <div className="max-h-max border border-zinc-500 h-full w-full lg:w-fit p-5  bg-gray-500 rounded-xl flex flex-col lg:gap-y-9 gap-y-8 backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all ease-in-out duration-500">
      <div
        className="btn absolute right-3 top-3 p-3 rounded-lg bg-gray-600 pr-2 lg:hidden"
        onClick={() => setToggleIdentity(!toggleIdentity)}
      >
        <FaChevronDown />
      </div>
      <div className="header-info flex lg:flex-col lg:gap-y-7 gap-x-5 items-center">
        <div className="img-wrapper p-1 bg-gray-600 backdrop-filter backdrop-blur-lg backdrop-fil w-[150px] rounded-3xl">
          <img src={memoji} alt="emoji" className="object-cover w-full" />
        </div>
        <div className="identity-info flex flex-col lg:items-center">
          <h3 className="font-semibold text-xs sm:text-sm lg:text-sm  md:text-xl lg:text-center">
            Muhammad Rayhan Gibran
          </h3>
          <p
            className="personal-title text-xs
            bg-gray-600 rounded-md font-light mt-3 max-w-max px-3 py-2"
          >
            Fullstack Web Developer
          </p>
        </div>
      </div>
      <hr className="border-t-1 border-zinc-500 hidden lg:block" />
      <div
        className={`contact-wrapper transition-all lg:h-52 overflow-hidden ease-in-out duration-500 ${
          toggleIdentity ? "h-0" : "h-52"
        } lg:block `}
      >
        <div className="main-contact transition-all ease-in-out duration-500 grid grid-cols-1 gap-4">
          <div className="contact flex w-full gap-x-3">
            <div className="icon-wrapper p-2 grid place-content-center bg-gray-600 rounded-lg">
              <MdEmail className="text-2xl" />
            </div>
            <div className="contact email w-full flex flex-col gap-y-1 overflow-hidden">
              <label className="text-xs font-light text-zinc-300">EMAIL</label>
              <a
                href="mailto:muhammadrayhangibran@gmail.com"
                className="text-sm font-medium truncate"
              >
                muhammadrayhangibran@gmail.com
              </a>
            </div>
          </div>
          <div className="contact flex w-full gap-x-3">
            <div className="icon-wrapper p-2 grid place-content-center bg-gray-600 rounded-lg">
              <FaWhatsapp className="text-2xl" />
            </div>
            <a
              href="https://wa.me/6282132679938"
              target="_blank"
              className="contact phone w-full flex flex-col gap-y-1"
            >
              <label className="text-xs font-light text-zinc-300">PHONE</label>
              <p className="text-sm font-medium">+62-821-3267-9938</p>
            </a>
          </div>
          <div className="contact flex w-full gap-x-3">
            <div className="icon-wrapper p-2 grid place-content-center bg-gray-600 rounded-lg">
              <GrMapLocation className="text-2xl" />
            </div>
            <div className="contact email w-full flex flex-col gap-y-1">
              <label className="text-xs font-light text-zinc-300">
                LOCATION
              </label>
              <p className="text-sm font-medium">
                Malang, East Java, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="socmed-wrapper transition-all ease-in-out duration-500 mt-8 flex lg:justify-center gap-3 items-center">
          <a href="https://www.instagram.com/rayhangibran_19/">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#">
            <SiLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
