import { motion } from 'framer-motion';
import Bio from '../components/about/Bio';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience'; // Added Experience
import Skills from '../components/about/Skills';
import SocialLinks from '../components/SocialLinks';

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl"
          >
            <Bio />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl"
          >
            <Education />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl"
          >
            <Experience /> {/* Added Experience section */}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl"
          >
            <Skills />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl"
          >
            <SocialLinks />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
