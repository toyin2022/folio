import { skills } from "../constants";
import Tilt from "react-tilt";
import { SectionWrapper } from "../hoc";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="relative z-10 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 md:gap-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
          Skills
        </h2>
        <p className="text-center text-lg md:text-xl font-medium text-secondary max-w-2xl mb-8">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p>
        <div className="flex w-full flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
          {skills.map((skill, index) => (
            <Tilt
              key={`skill-${index}`}
              options={{ max: 15, scale: 1.05, speed: 400 }}
            >
              <div
                className="
                  w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl border border-white/10
                  bg-tertiary p-6 md:p-7 shadow-lg hover:shadow-xl
                  transition-shadow duration-300
                 
                "
              >
                <h3 className="mb-6 text-center text-2xl font-semibold  text-white tracking-wide">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {skill.skills.map((item, idx) => (
                    <div
                      key={`skill-item-${idx}`}
                      className="
                        flex items-center gap-2 rounded-lg border
                        border-primary/60 bg-primary/5 px-3 py-2 text-sm
                        font-medium  text-white shadow-sm
                        hover:bg-primary/10 transition-colors duration-200
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-6 w-6 object-contain"
                      />
                      <span className="whitespace-nowrap">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
