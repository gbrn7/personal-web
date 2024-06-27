import { MdEmail } from "react-icons/md";
import TimelineItem from "../../components/TimelineItem";
import contentBackground from "../../assets/main-content-background.png";
import { experienceItems } from "../../constants/Index";

export default function About() {
  return (
    <div
      className="about flex flex-col gap-y-8 py-7 w-full bg-gray-500 rounded-xl backdrop-filter p-7 backdrop-blur-lg bg-opacity-30 border border-zinc-500"
      style={{
        background: `url(${contentBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="about">
        <h1 className="font-bold text-3xl title">About Me</h1>

        <div className="description mt-3">
          Hello my name is Muhammad Rayhan Gibran, iam a Fullstack Web Developer
          who can handle Front End (the parts of a website that users see and
          interact with) and Back End (the behind-the-scenes data storage and
          processing) of a website) with over two years of experience i can help
          you fulfill your needs.
        </div>
      </div>
      <div className="experience">
        <h1 className="font-bold text-3xl title">Experience</h1>
        <ol className="mt-3 flex flex-col gap-y-2">
          {experienceItems.map((item, index) => (
            <TimelineItem
              title={item.title}
              date={item.date}
              desc={item.desc}
              key={item.index}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
