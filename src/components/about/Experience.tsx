import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import Akwa_logo from '../akwa_group_logo.png';
import Compucom_logo from '../compucom_logo.png';
import internship1 from '../ATTESTATION NOHA.pdf';
import intership2 from '../attestation_compucom.pdf';


const experienceData = [
  {
    role: 'Odoo Developer (Apprenticeship)',
    company: 'Akwa Group',
    year: 'August 2022',
    location: 'Casablanca, MA',
    description: 'Developed and customized Odoo modules for internal business processes.',
    achievements: [
      'Successfully integrated third-party applications into the Odoo system.',
      'Optimized the workflow automation for inventory management.',
    ],
    logo: Akwa_logo,
    documents: [
      { name: 'Certificate', url: internship1 },
    ],
  },
  {
    role: 'Web/App Developer (Apprenticeship)',
    company: 'Akwa Group',
    year: '2022 - 2023',
    location: 'Casablanca, MA',
    description: 'Created responsive AutoGo website using modern technologies. For more details, go check it in the projects section',
    achievements: [
      'Developed a customer portal that improved user engagement and facilitates usage.'
    ],
    logo: Akwa_logo,
    documents: [
      { name: 'Certificate', url: '' },
    ],
  },
  {
    role: 'Security Intern',
    company: 'Compucom',
    year: '2024',
    location: 'Belvedere, Casablanca, MA',
    description: 'Assisted in vulnerability assessments, and security solution implementations for client systems.',
    achievements: [
      'Conducted vulnerability scans and identified critical security risks.',
      'Implemented a Web Application Firewall (WAF) to enhance application security.',
    ],
    logo: Compucom_logo,
    documents: [
      { name: 'WAF Config Project', url: '' },
      { name: 'Certificate', url: intership2 },
    ],
  },
];

export default function Experience() {
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
        className="text-3xl font-bold flex items-center justify-center mb-12 text-[#DDA853]"
      >
        <Briefcase className="mr-3 text-[#A6CDC6]" />
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#FBF5DD]/5 rounded-xl p-8 backdrop-blur-sm shadow-xl 
              border border-[#DDA853]/20 hover:border-[#DDA853]/40 transition-colors"
          >
            <ExperienceCard 
              experience={exp}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

