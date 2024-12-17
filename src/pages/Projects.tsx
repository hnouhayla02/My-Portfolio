import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedText from '../components/AnimatedText';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D product visualization tool using Three.js and React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Three.js', 'React', 'WebGL', 'Blender'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Chat application with real-time messaging using Socket.io',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="Featured Projects"
            className="text-4xl font-bold mb-12 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}