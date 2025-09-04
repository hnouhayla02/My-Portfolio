import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#FBF5DD]/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl 
        hover:shadow-2xl transition-all duration-300 border border-[#DDA853]/30 
        hover:border-[#DDA853] hover:scale-105 group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16404D]/20 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-[#16404D] group-hover:text-[#DDA853] 
          transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[#16404D]/80 mb-4 text-sm line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#A6CDC6]/30 text-[#16404D] rounded-full text-xs 
                font-medium border border-[#A6CDC6]/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-[#DDA853]/20 text-[#16404D] rounded-full text-xs 
              font-medium border border-[#DDA853]/50">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex space-x-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#16404D]/10 hover:bg-[#16404D]/20 text-[#16404D] 
                rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#DDA853]/20 hover:bg-[#DDA853]/30 text-[#16404D] 
                rounded-lg transition-all duration-300 hover:scale-110"
            >
              <ExternalLink size={16} />
            </a>
          </div>
          
          <Link
            to={`/projects/${project.id}`}
            className="px-4 py-2 bg-gradient-to-r from-[#DDA853] to-[#A6CDC6] 
              hover:from-[#A6CDC6] hover:to-[#DDA853] text-[#16404D] rounded-lg 
              transition-all duration-300 font-medium text-sm hover:shadow-lg 
              hover:shadow-[#DDA853]/25"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}