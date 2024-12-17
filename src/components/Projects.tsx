import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import AnimatedText from './AnimatedText';
import soren from '../utils/images/soren.png';
import talent from '../utils/images/talent.png';
import love from '../utils/images/love.png'
import causevest from '../utils/images/causevest.png';
import afairs from '../utils/images/afairs.png';
import wedding from '../utils/images/wedding.png';
const Projects = () => {
  console.log(soren)
  const projects = [
    {
      title: 'Soren Transport',
      description: 'This project focuses on managing and processing large datasets for carriers involved in shipments between the USA, Mexico, and Canada. The system is developed to handle Full Truck Load (FTL), Less Than Truck Load (LTL), and parcel services, providing efficient tracking, routing, and data organization',
      image:soren,
      technologies: ['React', 'Laravel', 'MySql','Redux','Chart.js','Web-Scokets','Webhooks','Rest API'],
      live: 'https://app.sorentransport.com/auth/login',
    },
    {
      title: 'IPM module',
      description: 'This project involves the development of a web application for conducting IPM (Integrated Pest Management) every 45 days and PIP Management. ',
      image: talent,
      technologies: ['React','Nest.js', 'TypeScript', 'MySql', 'Prisma','Redux', 'Chart.js','Rest API'],
      live: 'https://www.talentelgia.com',
    },
    {
      title: 'Love Justice',
      description: 'This project involves the development of a dynamic, user-centric web application for Love Justice International, a non-profit organization dedicated to preventing human trafficking and protecting vulnerable individuals.',
      image: love,
      technologies: ['React','Tailwind Css','Node.js','Express.js','MongoDb','Web-Scokets','Rest API'],
      live: 'https://www.lovejustice.com',
    },
    {
      title: 'Cause Vest',
      description: 'Cause Vest is a platform planned to facilitate social impact investing by allowing users to support companies that focus on sustainability and positive social change. The website provides a seamless user experience for exploring, investing, and tracking impact-driven portfolios',
      image: causevest,
      technologies: ['React', 'Laravel', 'MySql','Redux','Rest API'],
      live: 'https://www.causevest.io',
    },
    {
      title: 'Afairs',
      description: 'AFAIRS, Asia leading Education Fair and Convention organiser conducts Education Fairs and Exhibitions for Schools and Colleges in India and abroad. TGIEF is the largest annual education fair on Studying in India organised by AFAIRS in various countries.',
      image: afairs,
      technologies: ['HTML', 'CSS', 'MySql','JavaScript','Rest API'],
      live: 'https://www.afairs.com',
    },
    {
      title: 'Wedding Asia',
      description: 'Wedding Asia brings together renowned experts of the fashion industry and has been diligently acting as the bridge between vendors and buyers, customizing all the finer nuances so that we remain the most trusted, reliable platform regarding all weddings related requirements.',
      image: wedding,
      technologies: ['HTML', 'CSS', 'MySql','JavaScript','Laravel'],
      live: 'https://weddingasiaofficial.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        </AnimatedText>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-48 object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4" style={{height:'150px'}}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span 
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-blue-100 text-white rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {/* <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </motion.a> */}
                  <motion.a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;