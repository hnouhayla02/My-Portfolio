import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const renderScreenshots = () => {
    if (project.id === "firewall-config") {
      return (
        <div className="space-y-16 mb-8">
          {project.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#333456]/5 rounded-xl p-6 backdrop-blur-sm shadow-xl 
                border border-[#595B83]/10 hover:border-[#0e1240]/20 transition-colors"
            >
              <div className="relative w-full mb-6">
                <img
                  src={screenshot.url}
                  alt={screenshot.caption}
                  className="rounded-lg w-full h-[500px] object-contain bg-[#333456]/5"
                />
              </div>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-[#F4ABC4] mb-4">{screenshot.caption}</h3>
                {screenshot.description && (
                  <p className="text-[#F4ABC4]/80 text-lg leading-relaxed">{screenshot.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {project.screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={screenshot.url}
                alt={screenshot.caption}
                className="rounded-lg w-full h-48 object-contain bg-purple-100/5"
              />
            </div>
            <p className="text-sm text-pink-200/80 mt-2">{screenshot.caption}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-[#060930] to-[#0e1240]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-[#F4ABC4] hover:text-[#F4ABC4]/80 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>

          <div className="bg-[#333456]/5 rounded-xl p-8 backdrop-blur-sm shadow-xl 
            border border-[#595B83]/10 hover:border-[#F4ABC4]/20 transition-colors">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-[#F4ABC4]">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#595B83]/10 text-[#F4ABC4] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-[#F4ABC4]/80 whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#595B83]">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#F4ABC4] mr-2">•</span>
                      <span className="text-[#F4ABC4]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {renderScreenshots()}

            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#333456]/20 hover:bg-[#333456]/30 
                  text-[#F4ABC4] rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#F4ABC4]/25"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#333456] to-[#595B83] 
                  hover:from-[#595B83] hover:to-[#333456] text-[#F4ABC4] rounded-lg transition-all duration-300 
                  shadow-lg hover:shadow-[#F4ABC4]/25"
              >
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}