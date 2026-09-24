export default function TechnicalCard({ image, title, subtitle }) {
  return (
    <div className="technical-skill-item lg:max-w-72 w-full flex gap-x-4 border-gray-500 border p-3 rounded-lg items-center">
      <img
        src={image}
        alt={title}
        className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 technical-skill-img object-contain"
      />
      <div className="title-wrapper min-w-0 flex-1">
        <h2 className="font-bold text-base sm:text-lg truncate">{title}</h2>
        <p className="mt-1 text-xs sm:text-sm font-thin truncate text-gray-300">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
