import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <motion.section 
      className={styles.contact}
      id="contact"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <p>If you'd like to connect, feel free to reach out via email or on LinkedIn and GitHub.</p>
      <div className={styles.contactLinks}>
        <a href="mailto:aashikmathewss@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/aashikmathew" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/aashikmathewcodes" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </motion.section>
  );
}
