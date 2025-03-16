import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Bio() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold flex items-center justify-center mb-8 text-pink-100">
        <User className="mr-3 text-purple-300" />
        About Me
      </h2>
      <div className="text-lg text-pink-200/80 space-y-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          As a recent computer engineering graduate 
          and full-stack developer, I specialize in building 
          responsive, scalable web applications and creating seamless 
          user experiences. I have hands-on experience with many 
          technologies and I enjoy solving complex problems and optimizing
          application performance.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Currently based in Morocco, 
          I am passionate about learning new technologies, contributing 
          to open-source projects, and continuously improving my skills. 
          When I'm not coding, I enjoy exploring tech trends and mentoring 
          aspiring developers.
        </motion.p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-pink-100/5 p-4 rounded-lg border border-pink-200/10 
              hover:border-pink-300/20 transition-colors backdrop-blur-sm"
          >
            <h3 className="font-semibold text-purple-200">Location</h3>
            <p className="text-pink-200/80">Morocco</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-pink-100/5 p-4 rounded-lg border border-pink-200/10 
              hover:border-pink-300/20 transition-colors backdrop-blur-sm"
          >
            <h3 className="font-semibold text-purple-200">Experience</h3>
            <p className="text-pink-200/80">2 Years</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
