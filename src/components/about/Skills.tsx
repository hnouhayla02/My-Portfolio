import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Users } from 'lucide-react';

const skills = {
  "Frontend Development": {
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "HTML/CSS",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  "Backend Development": {
    icon: Server,
    skills: [
      "Node.js",
      "Python",
      "Java",
      "PHP",
      "Symfony",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  "Tools & Technologies": {
    icon: Wrench,
    skills: [
      "Git",
      "Docker",
      "Linux",
      "GitHub",
      "Figma",
      "PyCharm",
      "WordPress",
      "C/C++"
    ]
  },
  "Soft Skills": {
    icon: Users,
    skills: [
      "Team Leadership",
      "Problem Solving",
      "Communication",
      "Agile",
      "Mentoring",
      "Time Management"
    ]
  }
};


export default function Skills() {
  return (
    <div className="space-y-7">
      <h2 className="text-3xl font-bold flex items-center justify-center mb-12 text-[#DDA853]">
        <Code2 className="mr-3 text-[#A6CDC6]" />
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, { icon: Icon, skills }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#FBF5DD]/5 p-6 rounded-lg border-t-4 border-[#DDA853]/50 
              hover:border-[#DDA853] backdrop-blur-sm shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <Icon className="text-[#A6CDC6] mr-2" size={24} />
              <h3 className="text-xl font-bold text-[#DDA853]">{category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#16404D]/10 text-[#FBF5DD] rounded-full text-sm 
                    hover:bg-[#16404D]/20 transition-colors duration-300"
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