import { motion } from 'framer-motion';
import { Calendar, MapPin, FileText, Award } from 'lucide-react';

interface Document {
  name: string;
  url: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  location?: string;
  description: string;
  achievements: string[];
  logo?: string;
  documents?: Document[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.645, 0.045, 0.355, 1.000],
      }}
      className="relative bg-[#FBF5DD]/5 p-6 rounded-lg border-l-4 border-[#DDA853]/50 
        hover:shadow-xl transition-all duration-300 hover:border-[#DDA853]"
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center">
            {experience.logo && (
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 object-contain mr-4"
              />
            )}
            <div>
              <h3 className="text-xl font-bold text-[#DDA853]">{experience.role}</h3>
              <p className="text-lg text-[#16404D]">{experience.company}</p>
            </div>
          </div>
          <p className="text-[#FBF5DD] flex items-center mt-2">
            <Calendar size={16} className="mr-2 text-[#A6CDC6]" />
            {experience.year}
          </p>
          {experience.location && (
            <p className="text-[#FBF5DD] flex items-center mt-1">
              <MapPin size={16} className="mr-2 text-[#A6CDC6]" />
              {experience.location}
            </p>
          )}
          <p className="mt-3 text-[#FBF5DD]/80">{experience.description}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#A6CDC6] mb-2 flex items-center">
            <Award size={16} className="mr-2 text-[#A6CDC6]" />
            Achievements
          </h4>
          <ul className="list-disc list-inside text-[#FBF5DD]/80 space-y-1">
            {experience.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>

          {experience.documents && experience.documents.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-[#A6CDC6] mb-2 flex items-center">
                <FileText size={16} className="mr-2 text-[#A6CDC6]" />
                Documents
              </h4>
              <div className="space-y-2">
                {experience.documents.map((doc, i) => (
                  doc.url && (
                    <a
                      key={i}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#DDA853] hover:text-[#DDA853]/80 transition-colors"
                    >
                      {doc.name} →
                    </a>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

