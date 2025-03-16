import { motion } from 'framer-motion';
import ProfilePicture from '../components/pdp.jpg';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 rounded-full opacity-20 blur-xl" />
      <img
        src={ProfilePicture}
        alt="Nouhayla"
       className="w-full h-full object-cover rounded-full border-4 border-[#F4ABC4]"
      />
    </motion.div>
  );
}
