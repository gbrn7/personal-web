import TimelineItem from "../../components/TimelineItem";
import {
  experienceItems,
  projectItems,
  educationItems,
  technicalSkillItems,
} from "../../constants/Index";
import TechnicalCard from "../../components/TechnicalCard";

export default function About() {
  const groupedSkills = technicalSkillItems.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="about-wrapper flex flex-col gap-y-8 overflow-hidden sm:p-7 py-3 px-5">
      <div className="about">
        <h1 className="font-bold text-3xl title">About Me</h1>

        <div className="description mt-3">
          Hello my name is Muhammad Rayhan Gibran, iam a Software Engineer who
          can handle Front End (the parts of a Software that users see and
          interact with) and Back End (the behind-the-scenes data storage and
          processing of a Software) with over two years of experience in
          Software development i can help you fulfill your needs.
        </div>
      </div>
      <div className="experience">
        <h1 className="font-bold text-3xl title">Experience</h1>
        <ol className="mt-3 flex flex-col gap-y-4">
          {experienceItems.map((item, index) => (
            <TimelineItem
              title={item.title}
              company={item.company}
              date={item.date}
              detail={item.detail}
              key={index}
            />
          ))}
        </ol>
      </div>
      <div className="projects">
        <h1 className="font-bold text-3xl title">Projects</h1>
        <ol className="mt-3 flex flex-col gap-y-4">
          {projectItems.map((item, index) => (
            <TimelineItem
              company={item.name}
              title={item.role}
              date={item.date}
              detail={item.detail}
              key={index}
            />
          ))}
        </ol>
      </div>
      <div className="education">
        <h1 className="font-bold text-3xl title">Education</h1>
        <ol className="mt-3 flex flex-col gap-y-4">
          {educationItems.map((item, index) => (
            <TimelineItem
              company={item.institution}
              title={item.degree}
              date={item.date}
              detail={item.detail}
              key={index}
            />
          ))}
        </ol>
      </div>
      <div className="technical-skill w-full flex flex-col gap-y-6">
        <h1 className="font-bold text-3xl title">Technical Skill</h1>
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div
            key={category}
            className="category-section flex flex-col gap-y-3"
          >
            <div className="flex items-center gap-x-3">
              <h2 className="font-semibold text-lg sm:text-xl text-gray-200">
                {category}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-gray-500 text-gray-300 font-light">
                {items.length}
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-500/60 to-transparent"></div>
            </div>
            <div className="technical-wrapper grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
              {items.map((item, index) => (
                <TechnicalCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
