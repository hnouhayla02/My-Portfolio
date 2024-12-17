import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl" />
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
        alt="Jane Doe"
        className="w-full h-full object-cover rounded-full border-4 border-blue-400"
      />
    </motion.div>
  );
}