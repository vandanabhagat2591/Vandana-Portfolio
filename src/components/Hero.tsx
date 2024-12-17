import { Download, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { fadeInUp, staggerContainer } from '../utils/animations';
import webdevelopment from '../utils/images/webdevelopment.png';
const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/resume.pdf'; // For files in the public folder
    link.download = 'resume.pdf'; // The name for the downloaded file
    link.click();
  };
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="md:w-1/2 space-y-6 intro">
            <AnimatedText>
              <h1 className="text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="text-blue-600">Vandana</span>
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                Full Stack Developer
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <p className="text-lg text-gray-600 max-w-lg">
              I specialize in designing and developing exceptional, accessible, and user-centric digital experiences, leveraging cutting-edge web technologies to deliver scalable, high-performance solutions
              </p>
            </AnimatedText>

            <motion.div 
              className="flex space-x-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
            >
              <a href="https://www.linkedin.com/in/vandana-bhagat-842515149" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:vandana.bhagat2591@gmail.com"
                className="p-2 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
              >
                <Mail size={24} />
              </a>
              <button type="button" onClick={handleDownload}
                className="p-2 hover:text-blue-600 transition-colors transform hover:scale-110 duration-200"
              >
                <Download size={24} />
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={webdevelopment}
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto hover:shadow-2xl transition-shadow duration-300 web"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;