import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <motion.section 
      className={styles.projects}
      id="projects"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <h3>Smart Home Automation</h3>
          <p>
            Integrated IoT devices and built a control dashboard using Python and Raspberry Pi to streamline home automation.
          </p>
        </div>
        <div className={styles.projectCard}>
          <h3>ML Recommendation Engineer</h3>
          <p>
            Developed a recommendation engine with TensorFlow to deliver personalized user experiences.
          </p>
        </div>
        <div className={styles.projectCard}>
          <h3>Collaborative Learning Platform</h3>
          <p>
            Created a full‑stack web application using React and Node.js to foster real‑time collaborative learning.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
