export default function TimelineItem({ title, date, desc }) {
  return (
    <li className="timeline-item flex gap-x-3 items-start ">
      <div className="bullet">o</div>
      <div className="wrapper">
        <h4 className="h4 timeline-item-title font-medium text-lg">{title}</h4>
        <p className="date font-normal text-sm mt-1">{date}</p>
        <p className="timeline-text font-thin  text-sm">{desc}</p>
      </div>
    </li>
  );
}
