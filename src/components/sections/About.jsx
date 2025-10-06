"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiAcademicCap, HiBadgeCheck, HiStar } from 'react-icons/hi';
import { personalInfo } from '@/data/personalInfo';
import { education, certifications, achievements } from '@/data/education';

const iconMap = {
  trophy: HiStar,
  code: HiBadgeCheck,
  article: HiAcademicCap,
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and achievements
          </p>
        </motion.div>

        {/* Bio & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg" // Temporary placeholder - replace with about-image.jpg
                alt="About Abdullah Iqbal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate Developer, Creative Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">30+</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <HiAcademicCap className="text-blue-600 dark:text-blue-400" size={32} />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {edu.location} | {edu.duration}
                </p>
                {edu.gpa && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    GPA: {edu.gpa}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <HiBadgeCheck className="text-blue-600 dark:text-blue-400" size={32} />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {cert.date}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Credential →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <HiStar className="text-blue-600 dark:text-blue-400" size={32} />
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const Icon = iconMap[achievement.icon] || HiStar;
              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="text-blue-600 dark:text-blue-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {achievement.date}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
