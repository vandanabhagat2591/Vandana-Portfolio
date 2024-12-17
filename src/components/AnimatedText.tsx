import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ children, className = "", delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;