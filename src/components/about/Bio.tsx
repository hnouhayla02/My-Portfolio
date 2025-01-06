import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Bio() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold flex items-center justify-center mb-8">
        <User className="mr-3" />
        About Me
      </h2>
      <div className="text-lg text-gray-300 space-y-4 max-w-3xl mx-auto">
        <p>
          As a recent computer engineering graduate 
          and full-stack developer, I specialize in building 
          responsive, scalable web applications and creating seamless 
          user experiences. I have hands-on experience with many 
          technologies and I enjoy solving complex problems and optimizing
          application performance.
        </p>
        <p>
          Currently based in Morocco, 
          I am passionate about learning new technologies, contributing 
          to open-source projects, and continuously improving my skills. 
          When I’m not coding, I enjoy exploring tech trends and mentoring 
          aspiring developers.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400">Location</h3>
            <p>Morocco</p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400">Experience</h3>
            <p>2 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
