import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex  justify-center flex-col gap-8">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Toyin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 w-4/5`}>
            I'm a full stack web developer with over 3 years of experience in
            Node.js, React, Express, MongoDB, and React Native and many other
            popular frameworks and libraries.
            <br className="sm:block hidden" />
          </p>
          <a
            href="/toyin-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-[#915EFF] text-white rounded-lg shadow hover:bg-[#7a4fdc] transition w-fit"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
