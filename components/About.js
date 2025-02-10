import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <motion.section 
      className={styles.about}
      id="about"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I am a Computer Science graduate with a passion for technology and innovation.
        Specializing in full‑stack development, machine learning, and cloud computing, I bridge theory with practical application to build solutions that make a difference.
      </p>
    </motion.section>
  );
}
