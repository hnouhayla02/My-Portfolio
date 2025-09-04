import { motion } from 'framer-motion';
import Bio from '../components/about/Bio';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';
import Skills from '../components/about/Skills';
import SocialLinks from '../components/SocialLinks';

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-[#16404D] to-[#16404D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FBF5DD]/10 rounded-xl p-8 backdrop-blur-sm shadow-xl 
              border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
          >
            <Bio />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#FBF5DD]/10 rounded-xl p-8 backdrop-blur-sm shadow-xl 
              border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
          >
            <Education />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#FBF5DD]/10 rounded-xl p-8 backdrop-blur-sm shadow-xl 
              border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
          >
            <Experience />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-[#FBF5DD]/10 rounded-xl p-8 backdrop-blur-sm shadow-xl 
              border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
          >
            <Skills />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-[#FBF5DD]/10 rounded-xl p-8 backdrop-blur-sm shadow-xl 
              border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
          >
            <SocialLinks />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
