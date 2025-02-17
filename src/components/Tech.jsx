import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        MY GO TO TOOLS AND LANGUAGES
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Languages & Tools
        </h2>
      </motion.div>
      <div style={{ margin: "3rem 0" }}></div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(Tech, "");