import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import profile from "../assets/unnamed.png";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="section min-h-[80vh] lg:min-h-[78vh flex items-center]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[90px]"
            >
              ANN
              <span> SOLOMON </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="md-6 text-[36px] lg:text-[60px] font=secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4"> I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              As a passionate developer,I posses the skills and expertise to
              create powerful and dynamic web applications. With a strong
              foundation in both React,Node.js and Python I can seamlessly
              integrate frontend and backend technologies to deliver robust and
              scalable solutions.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              {/* <a href='#' className='text-gradient btn-link'> My Portfolio </a> */}
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/solomonann90">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ann-solomon-0abba221a/">
                <FaLinkedin />
              </a>
              <a href="mailto:solomonann90@gmail.com">
                <FaEnvelope />{" "}
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[525px] mix-blend-lighten"
          >
            <img src={profile} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
