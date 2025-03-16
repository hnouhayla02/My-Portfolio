import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Users } from 'lucide-react';

const skills = {
  "Frontend Development": {
    icon: Code2,
    skills: ["React", "TypeScript", "Three.js", "Html-CSS", "C/C++", "Python", "Java"]
  },
  "Backend Development": {
    icon: Server,
    skills: ["Node.js", "Python", "MySQL", "PHP", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  "Tools": {
    icon: Wrench,
    skills: ["Git", "Docker", "Linux", "Github", "Figma", "Pycharm", "WordPress"]
  },
  "Soft Skills": {
    icon: Users,
    skills: ["Team Leadership", "Problem Solving", "Communication", "Agile", "Mentoring", "Time Managment"]
  }
};

export default function Skills() {
  return (
    <div className="space-y-7">
      <h2 className="text-3xl font-bold flex items-center justify-center mb-12 text-[#F4ABC4]">
        <Code2 className="mr-3 text-[#595B83]" />
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, { icon: Icon, skills }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#333456]/5 p-6 rounded-lg border-t-4 border-[#F4ABC4]/50 
              hover:border-[#F4ABC4] backdrop-blur-sm shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Icon className="text-[#595B83] mr-2" size={24} />
              <h3 className="text-xl font-bold text-[#F4ABC4]">{category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#595B83]/10 text-[#F4ABC4] rounded-full text-sm 
                    hover:bg-[#595B83]/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}