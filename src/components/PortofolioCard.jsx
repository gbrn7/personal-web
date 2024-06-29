import { FaRegEye } from "react-icons/fa6";

export default function PortofolioCard({ image, title, subtitle, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="portofolioCard lg:max-w-72 w-full overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="img-wrapper max-h-40 h-full w-full  relative overflow-hidden rounded-lg">
        <img
          src={image}
          className="object-cover img-preview rounded-lg w-full h-full transition-all ease-in-out duration-500"
        />
        <div className="hover-wrapper bg-opacity-0 overflow-hidden hover:bg-opacity-40 top-0  w-full absolute h-full flex items-center justify-center bg-gray-100 z-20">
          <div className="icon-wrapper bg-slate-200 backdrop-blur-lg bg-opacity-30 p-3  rounded-md border hidden">
            <FaRegEye className="text-xl text-purple-900" />
          </div>
        </div>
      </div>
      <div className="text-wrapper mt-3 text-center lg:text-start">
        <div className="title font-semibold text-md">{title}</div>
        <div className="subtitle font-thin text-sm truncate">{subtitle}</div>
      </div>
    </a>
  );
}
