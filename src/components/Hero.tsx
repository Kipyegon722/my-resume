
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 z-0"></div>

      {/* Animated circles in background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-200/40 to-purple-300/30 blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/20 blur-xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hey, I'm</span>
            <span className="gradient-text text-5xl md:text-6xl lg:text-7xl">
              Victor Kipyegon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Full-Stack Web Developer
          </p>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
            I specialize in creating robust, scalable web applications with the MERN stack.
            With expertise in modern JavaScript frameworks, responsive design, and API integration,
            I build seamless digital experiences that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-600 text-purple-600 hover:text-purple-700 px-6 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Profile image container with gradient border */}
            <div className="mx-auto lg:ml-auto lg:mr-0 w-72 h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-purple-500 via-purple-400 to-indigo-500 shadow-xl">
              <div className="w-full h-full rounded-full bg-white p-4">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                  {/* Placeholder image - replace with actual image */}
                  <img
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
                    alt="Victor Kipyegon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating skill badges */}
            <motion.div
              className="absolute -top-5 -right-5 bg-white px-3 py-2 rounded-full shadow-lg text-sm font-medium text-purple-800"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              React
            </motion.div>
            <motion.div
              className="absolute top-1/4 -left-8 bg-white px-3 py-2 rounded-full shadow-lg text-sm font-medium text-purple-800"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
            >
              Node.js
            </motion.div>
            <motion.div
              className="absolute bottom-10 -right-6 bg-white px-3 py-2 rounded-full shadow-lg text-sm font-medium text-purple-800"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            >
              MongoDB
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={handleScrollToAbout}
      >
        <ArrowDown className="w-6 h-6 text-purple-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
