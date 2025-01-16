import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.shortDescription}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            View Details
            <ArrowRight size={20} className="ml-2" />
          </div>
        </div>
      </Link>
      
      <div className="px-6 pb-6 mt-2 flex space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={20} className="mr-1" />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={20} className="mr-1" />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}