import { useState } from "react";
import PortofolioCard from "../../components/PortofolioCard";
import { portofolioCardItems, portofolioCategory } from "../../constants/Index";

export default function Portofolio() {
  const [category, setCategory] = useState(null);
  return (
    <div className="portofolio-wrapper flex flex-col gap-y-8 py-7 overflow-hidden p-7">
      <div className="portofolio">
        <h1 className="font-bold text-3xl title">Portofolio</h1>
        <div className="btn-wrapper my-4 flex gap-x-2">
          <div
            className={`btn font-medium text-sm p-2  min-w-16 text-center border ${
              !category ? "border-slate-300" : "border-slate-500"
            }  rounded-md cursor-pointer`}
            onClick={() => setCategory(null)}
          >
            All
          </div>
          {portofolioCategory.map((item, index) => (
            <div
              className={`btn font-medium text-sm p-2  min-w-16 text-center border ${
                category == item.value ? "border-slate-300" : "border-slate-500"
              }  rounded-md cursor-pointer`}
              onClick={() => setCategory(item.value)}
              key={index}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="portofolio-wrap mt-3 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
          {portofolioCardItems.map((item, index) => {
            if (!category && item?.category) {
              return (
                <PortofolioCard
                  href={item.href}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  key={index}
                />
              );
            } else if (item.category == category) {
              return (
                <PortofolioCard
                  href={item.href}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
