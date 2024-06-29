import TimelineItem from "../../components/TimelineItem";
import { experienceItems, technicalSkillItems } from "../../constants/Index";
import TechnicalCard from "../../components/TechnicalCard";

export default function About() {
  return (
    <div className="about-wrapper flex flex-col gap-y-8 overflow-hidden sm:p-7 py-3 px-5">
      <div className="about">
        <h1 className="font-bold text-3xl title">About Me</h1>

        <div className="description mt-3">
          Hello my name is Muhammad Rayhan Gibran, iam a Fullstack Web Developer
          who can handle Front End (the parts of a website that users see and
          interact with) and Back End (the behind-the-scenes data storage and
          processing) of a website) with over two years of experience in web
          development i can help you fulfill your needs.
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
        <div className="technical-wrapper mt-3 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
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
