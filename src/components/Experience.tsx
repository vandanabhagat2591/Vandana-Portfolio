import { Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
interface TimelineExperienceProps {
  experiences: {
    company: string;
    position: string;
    period: string;
    description: string[];
    companyLogo?: string;
    technologies:string[]
  }[];
}

export function Experience({ experiences }: TimelineExperienceProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200" />
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 shadow-md">
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={exp.company} className="w-8 h-8 object-contain" />
              ) : (
                <Building2 className="w-8 h-8 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                  {exp.technologies.map((tech) => (
                    <motion.span 
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-blue-100 text-white rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}