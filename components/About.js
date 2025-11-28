import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.greeting}>
          Hi there! <span className={styles.waveEmoji}>👋</span>
        </h1>

        <p className={styles.bio}>
          I'm Aashik Mathew Prosper – a software engineer and dedicated problem-solver committed to transforming cutting-edge technology into real-world solutions. With deep expertise in full-stack development, AI, and machine learning, I have designed and built responsive web applications, deployed sophisticated AI models, and driven impactful research in healthcare and education.
        </p>

        <p className={styles.bio}>
          Currently, I serve as a Research Specialist at the University of Illinois at Chicago (UIC), College of Medicine and a Software Engineer at Creative Digital Services at UIC. I also proudly contribute as a Teaching Assistant at Cedar Grove High School in Wisconsin as part of the Microsoft TEALS Program, and as an Intel One API Ambassador. Check my Ambassdor profile{' '}
          <a 
            href="https://www.intel.com/content/www/us/en/developer/tools/oneapi/training/academic-program/student-ambassador/all-ambassador-profiles.html?s=AtoZ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>

        <p className={styles.bio}>
          I am open to full-time opportunities where I can further leverage my passion for continuous learning and drive meaningful change through technology.
        </p>

        <div className={styles.resumeSection}>
          <a
            href="https://drive.google.com/file/d/1rPIuFQuO5zNwFd_8p0HaLAG8bSaAf97u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
