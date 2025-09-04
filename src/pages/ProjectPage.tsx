import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#16404D] to-[#A6CDC6]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#FBF5DD]">Project not found</h2>
          <Link to="/projects" className="text-[#DDA853] hover:text-[#DDA853]/80">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const renderScreenshots = () => {
    if (project.id === "firewall-config" || project.id === "mini-robot") {
      return (
        <div className="space-y-16 mb-8">
          {project.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FBF5DD]/10 rounded-xl p-6 backdrop-blur-sm shadow-xl 
                border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
            >
              <div className="max-w-3xl mx-auto mb-6">
                <h3 className="text-2xl font-semibold text-[#DDA853] mb-4">{screenshot.caption}</h3>
                {screenshot.description && (
                  <p className="text-[#FBF5DD]/80 text-lg leading-relaxed mb-6">{screenshot.description}</p>
                )}
              </div>
              <div className="relative w-full">
                {screenshot.url.endsWith('.mp4') ? (
                  <video
                    controls
                    className="rounded-lg w-full h-[500px] object-contain bg-[#FBF5DD]/5 cursor-pointer"
                    onClick={() => setSelectedImage(screenshot.url)}
                  >
                    <source src={screenshot.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption}
                    className="rounded-lg w-full h-[500px] object-contain bg-[#FBF5DD]/5 cursor-pointer 
                      hover:scale-[1.02] transition-transform duration-300"
                    onClick={() => setSelectedImage(screenshot.url)}
                  />
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
                className="rounded-lg w-full h-48 object-contain bg-[#FBF5DD]/5 cursor-pointer 
                  hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(screenshot.url)}
              />
            </div>
            <p className="text-sm text-[#FBF5DD]/80 mt-2">{screenshot.caption}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-[#16404D] to-[#A6CDC6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-[#DDA853] hover:text-[#DDA853]/80 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>

          <div className="bg-[#FBF5DD]/10 rounded-xl p-8 backdrop-blur-sm shadow-xl 
            border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full h-[400px] cursor-pointer 
                  hover:scale-[1.02] transition-transform duration-300"
                onClick={() => setSelectedImage(project.image)}
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-[#DDA853]">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#A6CDC6]/20 text-[#16404D] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-[#FBF5DD]/90 whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#DDA853]">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#A6CDC6] mr-2">•</span>
                      <span className="text-[#FBF5DD]/90">{feature}</span>
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
                className="inline-flex items-center px-6 py-3 bg-[#16404D]/80 hover:bg-[#16404D] 
                  text-[#FBF5DD] rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#DDA853]/25"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#DDA853] to-[#A6CDC6] 
                  hover:from-[#A6CDC6] hover:to-[#DDA853] text-[#16404D] rounded-lg transition-all duration-300 
                  shadow-lg hover:shadow-[#DDA853]/25 font-semibold"
              >
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#16404D]/80 hover:bg-[#16404D] 
                text-[#FBF5DD] rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            {selectedImage.endsWith('.mp4') ? (
              <video
                controls
                autoPlay
                className="w-full h-full object-contain rounded-lg"
              >
                <source src={selectedImage} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}