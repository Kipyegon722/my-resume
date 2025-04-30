
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold mb-2">Victor Kipyegon</h2>
            <p className="text-gray-400">Full-Stack Web Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Phone</h3>
              <p className="text-gray-300">0758663405</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Email</h3>
              <p className="text-gray-300">victor.kipyegon@biggcreatives.cloud</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Victor Kipyegon. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
