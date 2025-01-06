import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import EducationCard from './EducationCard';
import certificate from "../NouhaylaHarchi-CCNAv7-certificate.pdf"
import diploma from "../nouhayla_diploma.pdf"

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    school: "KHAS",
    year: "2020-2024",
    location: "Istanbul, TR",
    description: "Principles of electrical engineering and computer science to design, develop, and optimize hardware and software systems.",
    achievements: [
      "Teaching Assistant for CS101",
      "GPA: 2.9"
    ],
    documents: [
      {
        name: "Bachelor's Degree Certificate",
        url: diploma // Replace with actual path when available
      }
    ]
  },
  {
    degree: "CCNAv7",
    school: "Cisco Networking Academy",
    year: "2024",
    description: "Networks course: proficiency in configuring network devices, implementing IPv4/IPv6 addressing, troubleshooting connectivity, and applying OSI model principles and security best practices in small networks.",
    achievements: [
      "Course Completion Certificate"
    ],
    documents: [
      {
        name: "CCNA Certificate",
        url: certificate // Replace with actual path when available
      }
    ]
  }
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-bold flex items-center justify-center mb-12"
      >
        <GraduationCap className="mr-3" />
        Education
      </motion.h2>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <EducationCard 
            key={edu.degree} 
            education={edu} 
            index={index} 
          />
        ))}
      </div>
    </motion.div>
  );
}