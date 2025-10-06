"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '@/data/personalInfo';

const socialLinks = [
  { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
  { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FaTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
  { icon: FaEnvelope, url: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="text-blue-600 dark:text-blue-400">Abdullah</span> Iqbal
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              {personalInfo.title}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base">
                About
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} {personalInfo.name}.
            <FaHeart className="text-red-500 mx-1" size={14} /> 
          </p>
        </div>
      </div>
    </footer>
  );
}
