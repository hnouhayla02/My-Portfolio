import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, FileText } from 'lucide-react';

interface Document {
  name: string;
  url: string;
}

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  location?: string;
  description: string;
  achievements: string[];
  documents?: Document[];
}

interface EducationCardProps {
  education: EducationItem;
  index: number;
}

export default function EducationCard({ education, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.645, 0.045, 0.355, 1.000]
      }}
      className="relative bg-[#FBF5DD]/5 p-6 rounded-lg border-l-4 border-[#DDA853]/50 
        hover:shadow-xl transition-all duration-300 hover:border-[#DDA853]"
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-[#DDA853]">{education.degree}</h3>
          <p className="text-lg text-[#16404D]">{education.school}</p>
          <p className="text-[#FBF5DD] flex items-center mt-2">
            <Calendar size={16} className="mr-2 text-[#A6CDC6]" />
            {education.year}
          </p>
          {education.location && (
            <p className="text-[#FBF5DD] flex items-center mt-1">
              <MapPin size={16} className="mr-2 text-[#A6CDC6]" />
              {education.location}
            </p>
          )}
          <p className="mt-3 text-[#FBF5DD]/80">{education.description}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#A6CDC6] mb-2 flex items-center">
            <Award size={16} className="mr-2 text-[#A6CDC6]" />
            Achievements
          </h4>
          <ul className="list-disc list-inside text-[#FBF5DD]/80 space-y-1">
            {education.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          
          {education.documents && education.documents.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-[#A6CDC6] mb-2 flex items-center">
                <FileText size={16} className="mr-2 text-[#A6CDC6]" />
                Documents
              </h4>
              <div className="space-y-2">
                {education.documents.map((doc, i) => (
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