import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectDetails: React.FC = () => {
  const  {id}  = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button
          onClick={() => navigate('/projects')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {project.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                {project.fullDescription}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-white">Technologies Used:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 bg-gray-800 rounded-lg shadow-lg"
                    >
                      <span className="text-lg font-semibold text-gray-300">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  GitHub Repository
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;