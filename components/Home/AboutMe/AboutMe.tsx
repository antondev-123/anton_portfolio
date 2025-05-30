import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe() {
  const technologies = [
    [
      "JavaScript (ES6+)",
      "React",
      "Vue.js",
      "Angular",
      "React Native",
      "Material UI",
      "Express.js",
      "PHP",
      "MongoDB",
      "AWS Lamda",
      "GitHub",
      "Webpack",
      "Gulp",
      "Jest",
    ],
    [
      "TypeScript",
      "Next.js",
      "Nuxt.js",
      "Tailwind CSS",
      "BootStrap",
      "Node.js",
      "Nest.js",
      "Laravel",
      "MySQL",
      "AWS EC2",
      "Bitbucket",
      "Babel",
      "Cypress",
      "Docker",
    ],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 max-w-8xl aos-init aos-animate"
    >
      {/* // ? 0.1 About Me */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 ">
        {/* // ? Title  */}
        <section
          className="flex items-center px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px]"
        >
          <div className="flex flex-row items-center">
            <ArrowIcon
              className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
            />
            <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
              {" "}
              01.
            </span>
          </div>
          <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
            About Me
          </span>
          <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
        </section>
        {/* // ?Image in Mobile */}
        <div className="w-full h-48 flex justify-center items-center !my-16 !mt-32 md:hidden">
          <div className="group relative lg:w-96 lg:h-96 w-72 h-72">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/myPortfolio.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
        {/* // ? Paragraphs */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is{" "}
                <span className="text-AAsecondary">Anton Sydor</span>, a{" "}
                <span className="text-AAsecondary">talented web developer</span>{" "}
                with a <span className="text-AAsecondary">strong passion</span>{" "}
                for
                <span className="text-AAsecondary"> problem-solving</span> and
                creating
                <span className="text-AAsecondary"> impactful codes</span>. I
                embarked on my computer science journey in 2010, initially
                exploring game developing. However, I soon realized the
                importance of{" "}
                <span className="text-AAsecondary">web programming</span> skills
                and began my journey.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Throughout my career, I have gained extensive experience in
                <span className="text-AAsecondary"> web </span>
                application development, working across various industries. I
                have honed my expertise in HTML5, CSS3, JavaScript, TypeScript,
                React, Next.js, Vue.js, Nuxt.js, Angular, React Redux, RESTful
                API, Tailwind CSS, Material UI, Node.js, Nest.js, Express.js,
                PHP, and Laravel, among others.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                My dedication to pushing boundaries and driving advancements is
                particularly evident in my work in the{" "}
                <span className="text-AAsecondary">frontend development</span>.
                My passion for{" "}
                <span className="text-AAsecondary">frontend development</span>{" "}
                and
                <span className="text-AAsecondary">
                  {" "}
                  continuous learning fuels
                </span>{" "}
                my desire to make a positive impact and contribute to the
                advancement of technology.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/myPortfolio.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
