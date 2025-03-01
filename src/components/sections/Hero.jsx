import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../../../public/durvankur.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-secondary/50 dark-gray-900/30">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-[#915EFF]">
            <img
              src={profileImage}
              alt="Durvankur Rasal"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating Glow Effect */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            className="absolute -z-10 w-80 h-80 md:w-96 md:h-96 bg-[#915EFF] opacity-20 blur-3xl rounded-full"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-white font-extrabold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-tight">
            Hi, I'm <span className="text-[#915EFF]">Durvankur Rasal</span>
          </h1>
          <p className="mt-4 text-gray-300 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
            MERN stack developer & AI enthusiast. I build modern web applications and explore the power of Machine Learning & Deep Learning to create intelligent solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="https://www.linkedin.com/in/durvankurrasal/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#005582] transition">
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/durvankur-rasal" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 border border-gray-600 hover:bg-gray-700 transition">
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Animation */}
      {/* <div className="absolute bottom-10 w-full flex justify-center">
        <Link to="#about">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2"
          >
            <div className="w-3 h-3 rounded-full bg-[#915EFF] mb-1" />
          </motion.div>
        </Link>
      </div> */}
    </section>
  );
};

export default Hero;
