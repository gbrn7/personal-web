export default function TimelineItem({ company, date, title, desc, detail }) {
  return (
    <li className="timeline-item flex gap-x-3 items-start">
      <div className="bullet">o</div>
      <div className="wrapper flex-1">
        <h4 className="h4 timeline-item-title font-medium text-lg">
          {company || title}
        </h4>
        <p className="date font-normal text-sm mt-1">{date}</p>
        <p className="timeline-text font-thin text-sm">
          {company ? title : desc}
        </p>
        {detail && detail.length > 0 && (
          <ul className="detail-list list-disc list-outside ml-4 mt-2 flex flex-col gap-y-1 text-sm font-thin text-gray-300">
            {detail.map((point, index) => {
              if (point.startsWith("Utilized:")) {
                return (
                  <li key={index} className="leading-relaxed">
                    <span className="font-semibold text-gray-100">
                      Utilized:{" "}
                    </span>
                    <span className="font-medium text-gray-200">
                      {point.replace(/^Utilized:\s*/, "")}
                    </span>
                  </li>
                );
              }
              return (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </li>
  );
}
