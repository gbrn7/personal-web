import TimelineItem from "../../components/TimelineItem";
import contentBackground from "../../assets/main-content-background.png";
import { experienceItems, technicalSkillItems } from "../../constants/Index";
import TechnicalCard from "../../components/TechnicalCard";

export default function About() {
  return (
    <div
      className="about  flex flex-col gap-y-8 py-7 overflow-hidden bg-gray-500 rounded-xl backdrop-filter p-7 backdrop-blur-lg bg-opacity-30 border border-zinc-500"
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
        <h1 className="font-bold text-3xl title">Project & Experience</h1>
        <ol className="mt-3 flex flex-col gap-y-2 ">
          {experienceItems.map((item, index) => (
            <TimelineItem
              title={item.title}
              date={item.date}
              desc={item.desc}
              key={index}
            />
          ))}
        </ol>
      </div>
      <div className="technical-skill w-full ">
        <h1 className="font-bold text-3xl title">Technical Skill</h1>
        <div className="technical-wrapper mt-3 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          {technicalSkillItems.map((item, index) => (
            <TechnicalCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
