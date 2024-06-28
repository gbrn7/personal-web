import icon from "../assets/laravel.svg";

export default function TechnicalCard({ image, title, subtitle }) {
  return (
    <div className="technical-skill-item lg:max-w-72 w-full flex gap-x-4 border-gray-500 border p-3 rounded-lg items-center">
      <img
        src={image}
        alt="technical-skill-img"
        className="w-16 h-16 technical-skill-img object-contain"
        style={{ color: "blue" }}
      />
      <div className="title-wrapper ">
        <h2 className="font-bold texttext-xl">{title}</h2>
        <p className="mt-1 text-sm font-thin">{subtitle}</p>
      </div>
    </div>
  );
}
