
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Responsive Design"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "API Development", "Authentication"]
  },
  {
    category: "Integration",
    items: ["RESTful APIs", "Payment Integration (M-Pesa)", "Chatbot Integration", "Business Email"]
  }
];

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-50 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            I'm a passionate full-stack web developer specialized in the MERN stack with over 5 years of experience
            building modern, responsive web applications. My journey in web development is driven by a love for
            creating seamless user experiences and solving complex problems through elegant code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-card transition-all duration-300 hover:-translate-y-1 border border-purple-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-700">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="flex items-center"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { title: "User Focused", description: "I prioritize intuitive, accessible designs." },
              { title: "Optimized Performance", description: "Fast loading times and efficient code." },
              { title: "Clean Code", description: "Well-structured and maintainable solutions." },
              { title: "Continuous Learning", description: "Always embracing new technologies." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{idx + 1}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
