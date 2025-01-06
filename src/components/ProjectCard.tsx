import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Project} from '../data/projects'
import { ExternalLink, Github } from 'lucide-react';


interface ProjectCardProps {
    project: Project;  
    index: number;
  
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition duration-300"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h2>
          <p className="text-gray-400 text-sm">{project.shortDescription}</p>
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
        
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
          >
            <Github size={20} className="mr-1" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={20} className="mr-1" />
            Live Demo
          </a>
        </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
