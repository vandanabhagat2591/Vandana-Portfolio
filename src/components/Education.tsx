import { Calendar, Building2 } from 'lucide-react';
interface TimelineEducationProps {
  education: {
    college: string;
    period: string;
    description: string[];
    companyLogo:string;
  }[];
}

export function Education({ education }: TimelineEducationProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200" />
      <div className="space-y-12">
        {education.map((exp, index) => (
          <div key={index} className="relative flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 shadow-md">
              {exp.companyLogo ? (
                <img src={exp.companyLogo} alt={exp.college} className="w-8 h-8 object-contain" />
              ) : (
                <Building2 className="w-8 h-8 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <span className="font-medium">{exp.college}</span>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}