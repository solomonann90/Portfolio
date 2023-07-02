import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaStar } from "react-icons/fa";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const starIconStyles = {
    color: "gold",
   
  };
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* bg-about */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 logo"> Skills & Experience</h2>
            <div className="flex gap-x-10 lg:gap-x-20 mb-12">
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-5">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years Of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-5">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
            
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[13px]">
              HTML5
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[20px] ">
              CSS3
              <FaStar style={starIconStyles}  />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
            
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[2px]">
              JavaScript
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[5.5px]">
              React JS
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[11.5px]">
              Python
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[32.5px]">
              SQL
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-gradient tracking-[6.5px]">
              NODE JS
              <FaStar style={starIconStyles}/>
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
              <FaStar style={starIconStyles} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
