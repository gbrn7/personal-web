import PortofolioCard from "../../components/PortofolioCard";
import { portofolioCardItems } from "../../constants/Index";

export default function Portofolio() {
  return (
    <div className="portofolio-wrapper flex flex-col gap-y-8 py-7 overflow-hidden p-7">
      <div className="portofolio">
        <h1 className="font-bold text-3xl title">Portofolio</h1>
        <div className="portofolio-wrap mt-3 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          {portofolioCardItems.map((item, index) => (
            <PortofolioCard
              href={item.href}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
