import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import ProfileImage from '../components/ProfileImage';
import SocialLinks from '../components/SocialLinks';
import AnimatedText from '../components/AnimatedText';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <Scene3D />
          </Canvas>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <ProfileImage />
              
              <AnimatedText
                text="Jane Doe"
                className="text-4xl md:text-5xl font-bold mb-4"
                delay={0.2}
              />
              
              <AnimatedText
                text="Full Stack Developer"
                className="text-5xl md:text-7xl font-bold mb-6"
                delay={0.4}
              />
              
              <AnimatedText
                text="Crafting digital experiences that combine form and function"
                className="text-xl md:text-2xl text-gray-300 mb-8"
                delay={0.6}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <SocialLinks />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12"
              >
                <a
                  href="#about"
                  className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}