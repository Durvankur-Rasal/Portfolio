import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../../assets/durvankur.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-secondary/50 dark:bg-gray-900/30 transition-colors duration-500">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center gap-12 sm:gap-16">
        
        {/* Left Side: Profile Image with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[#915EFF]">
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
            className="absolute -z-10 w-80 h-80 md:w-96 md:h-96 bg-[#915EFF] opacity-30 blur-3xl rounded-full"
          />
        </motion.div>

        {/* Right Side: Text & CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-gray-900 dark:text-white font-extrabold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-tight">
            Hi, I'm <span className="text-[#915EFF]">Durvankur Rasal</span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
            MERN stack developer & AI enthusiast. I build modern web applications and explore the power of Machine Learning & Deep Learning to create intelligent solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/durvankurrasal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#005582] transition-all"
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a
              href="https://github.com/durvankur-rasal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 border border-gray-600 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
            >
              <FaGithub size={22} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Animation */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-10 flex justify-center items-center"
      >
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
          <div className="w-3 h-3 rounded-full bg-[#915EFF] mb-1" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
