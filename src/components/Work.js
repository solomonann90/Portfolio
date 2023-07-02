import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import image1 from "../assets/Project1.jpg";
import image2 from "../assets/Project2.jpg";
import image3 from "../assets/Projectx.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 heading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="mx-w-sm mb-16">
                My latest work includes an exclusive MERN Stack Ecommerce
                Application , and UI/US DEsigns for admin dashboard and personal
                portfolio using React JS , Tailwind CSS etc....
              </p>
              <button className="btn btn-sm"> View all Projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl  ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image2}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
            duration-500 z-50"
              >
                <span className="text-gradient">UI/UX DESIGN - REACT JS</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
            duration-700 z-50"
              >
                <span className="text-3xl text-white">ADMIN DASHBOARD</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-20"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl   ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image1}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
            duration-500 z-50"
              >
                <span className="text-gradient"> MERN ECOMMERCE APP </span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
            duration-700 z-50"
              >
                <span className="text-3xl text-white"> BIG SHOPPER</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-2xl  ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={image3}
                alt=""
              />
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
            duration-500 z-50"
              >
                <span className="text-gradient"> UI/UX DESIGN - REACT JS</span>
              </div>
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
            duration-700 z-50"
              >
                <span className="text-3xl text-white">MY PORTFOLIO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
