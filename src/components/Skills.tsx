import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '../utils/animations';
import AnimatedText from './AnimatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faGithub, faAws, faFigma, faLaravel, faPhp,faExpeditedssl, faNeos,faWebflow, faCss, faJava, faJs, faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faNetworkWired,faChartSimple,faFileWord ,faTimeline,faMicroscope,faSpider, faJar} from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
  const skills = [
    { category: 'Frontend', items: [{name:'React',icon:faReact},{ name:'TypeScript',icon:faJava},{ name:'Tailwind CSS',icon:faCss}, {name:'JavaScript',icon:faJs},{name:'HTML',icon:faHtml5},{name:'JQuery',icon:faJar}] },
    { category: 'Backend', items: [{name:'Node.js',icon:faNodeJs}, {name:'Express',icon:faExpeditedssl}, {name:'Nest.js',icon:faNeos}, {name:'PHP',icon:faPhp},{name:'Laravel',icon:faLaravel}] },
    { category: 'DataBase', items: [{name:'MongoDB',icon:faDatabase}, {name:'MySql',icon:faDatabase}] },
    { category: 'Tools', items: [{name:'Git',icon:faGithub},{name:'AWS',icon:faAws}, {name:'Figma',icon:faFigma},{name:'WireFrames',icon:faNetworkWired}] },
    { category: 'Other', items: [{name:'REST APIs',icon:faWebflow}, {name:'GraphQL',icon:faChartSimple}, {name:'Testing',icon:faMicroscope}, {name:'CI/CD',icon:faFileWord},{name:'WordPress',icon:faTimeline},{name:'Web-Sockets',icon:faSpider}] },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-5">
        <AnimatedText>
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        </AnimatedText>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={scaleIn}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  
                  <motion.li
                    key={skill.name}
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FontAwesomeIcon icon={skill.icon} className="mr-2 iconColor" />
                    {skill.name}
                  </motion.li>
                 
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;