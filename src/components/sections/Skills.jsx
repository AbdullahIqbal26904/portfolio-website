"use client";

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillCard = ({ skill }) => {
    const Icon = skill.icon;
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Icon className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            {skill.name}
          </h4>
        </div>
        
        {/* Skill Level Bar */}
        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-right">
          {skill.level}%
        </p>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-blue-600 dark:text-blue-400">Tech Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-purple-600 dark:bg-purple-400 rounded"></span>
            Backend Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.backend.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* DevOps Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-green-600 dark:bg-green-400 rounded"></span>
            DevOps & Cloud
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.devops.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-yellow-600 dark:bg-yellow-400 rounded"></span>
            Tools & Others
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
