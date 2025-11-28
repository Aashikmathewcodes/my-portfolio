import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Using custom SVG icons instead of emojis
const LanguageIcon = ({ language }) => {
  switch (language) {
    case 'Python':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M14 13.5v2.5c0 1.1-.9 2-2 2h-2v3l-4-4 4-4v3h2c.55 0 1-.45 1-1v-1.5c0-1.38 1.12-2.5 2.5-2.5h3v2h-3c-.28 0-.5.22-.5.5m5-8.5c0-1.1-.9-2-2-2h-1.5v-2.5c0-1.38-1.12-2.5-2.5-2.5h-5c-1.38 0-2.5 1.12-2.5 2.5v2.5h-1.5c-1.1 0-2 .9-2 2v3h2v-3c0-.55.45-1 1-1h1.5v2.5c0 1.38 1.12 2.5 2.5 2.5h5c1.38 0 2.5-1.12 2.5-2.5v-2.5h1.5c.55 0 1 .45 1 1v6.5h2z" />
        </svg>
      );
    case 'Jupyter Notebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 3v8h-2v-8h2zm-2 10v2h2v-2h-2z" />
        </svg>
      );
    case 'Ruby':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.8 2.07c2.5 2.5 4.2 10.5 1.2 16.5-2.5 5.1-9.5 4.4-13.8 3.1-4.3-1.2-6.6-7.9-5.8-12.6.7-3.8 4.9-7.5 8.9-8.9 3.1-1.2 7-1.2 9.5 1.9z" />
        </svg>
      );
    case 'Java':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M8.48 9.4s-1.1.6.77.8c2.26.3 3.4.26 5.88-.23 0 0 .65.4 1.56.76-5.55 2.36-12.57-.14-8.21-1.33M7.93 13.06s-1.21.9.65 1.08c2.41.25 4.32.27 7.62-.33 0 0 .46.47 1.17.9-6.7 1.95-14.16.15-9.44-1.65M14.22 4.69c1.37 1.58-.37 3.01-.37 3.01s3.49-1.8 1.89-4.03c-1.5-2.09-2.65-3.13 3.58-6.72 0 0-9.78 2.44-5.1 7.74M19.52 14.74s.81.67-.9 1.18c-3.26.98-13.58 1.28-16.44.04-1.03-.45.9-1.08 1.5-1.21.63-.13.99-.11.99-.11-1.14-.8-7.36 1.57-3.16 2.25 11.45 1.87 20.87-.84 18.01-2.15M9.32 8.03s-5.21 1.24-1.85 1.68c1.42.19 4.25.15 6.89-.08 2.15-.18 4.3-.58 4.3-.58s-.76.33-1.3.7c-5.25 1.38-15.38.74-12.46-.67 2.46-1.19 4.42-1.05 4.42-1.05M16.76 12.2c5.33-2.77 2.87-5.43 1.14-5.08-.42.09-.61.16-.61.16s.16-.24.45-.34c3.35-1.17 5.92 3.53-1.1 5.41 0 0 .08-.07.12-.15M13.47 0s2.95 2.95-2.8 7.5c-4.63 3.62-1.06 5.69 0 8.04-2.7-2.44-4.69-4.58-3.35-6.58 1.96-2.95 7.41-4.37 6.15-8.96M9.62 22.53c5.12.33 12.98-.18 13.17-2.62 0 0-.36.92-4.23 1.65-4.37.83-9.76.73-12.96.2 0 0 .65.55 4.02.77" />
        </svg>
      );
    case 'C++':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C1.56 15.77 1 14.16 1 12.21c.05-2.31.72-4.08 2-5.32C4.32 5.64 5.96 5 7.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32M16.5 16h-2.17c-.53 0-.96-.43-.96-.96V14h3.13v-2h-3.13V9h3.13V7h-3.13c0-.53.43-.96.96-.96h2.17c.53 0 .96.43.96.96v8c0 .53-.43.96-.96.96zm5-8h-2v1h2v2h-2v1h2v2h-2v1h2c.53 0 .96-.43.96-.96v-4.09c0-.53-.43-.95-.96-.95z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v2h-2V9zm0 4h2v6h-2v-6z" />
        </svg>
      );
  }
};

// Icons for project attributes
const PrivateIcon = ({ isPrivate }) => (
  isPrivate ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" title="Private repository">
      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" title="Public repository">
      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" />
    </svg>
  )
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23 0-.86 0-1.69-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const ForkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M6 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm13-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 6c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm7 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1zm-1-4.1V7.1c0-.66.55-1.2 1.21-1.19h5.38c.67 0 1.21.53 1.21 1.19V9c0 .66-.54 1.2-1.21 1.19h-5.38C12.55 10.2 12 9.66 12 9v-0.1z" />
  </svg>
);

const LicenseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
  </svg>
);

const UpdateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      name: 'AI-Powered-Safety-Standards-Analyzer',
      description:
        'The AI-Powered Safety Standards Analyzer is a tool designed to help standards organizations, manufacturers, and safety professionals identify gaps in existing safety standards, particularly for emerging technologies. Using OpenAIs API, this application analyzes safety standards documents and compares them against research papers and incident reports to identify potential areas where standards need to be updated or expanded.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'March 16, 2025',
      link: 'https://github.com/aashikmathew/AI-Powered-Safety-Standards-Analyzer',
    },
    {
      name: 'himym-maclarens-api',
      description:
        'A tribute API and web app to How I Met Your Mother featuring fun facts, jokes, quotes, and Barney\'s legendary pickup lines. Built with FastAPI and featuring an interactive, animated UI with glassmorphism design.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Aug 25, 2024',
      license: 'MIT License',
      link: 'https://github.com/aashikmathew/himym-maclarens-api',
      liveLink: 'https://aashikmathew.github.io/himym-maclarens-api/',
    },
    {
      name: 'iot-heart-beat-monitor-dashbaord',
      description:
        'A FastAPI-based backend service for monitoring IoT device heartbeats and detecting anomalies. Features real-time device monitoring, anomaly detection, Prometheus metrics, Grafana integration, and a modern HTML dashboard with Docker containerization.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Jul 1, 2024',
      license: 'MIT License',
      link: 'https://github.com/aashikmathew/iot-heart-beat-monitor-dashbaord',
    },
    {
      name: 'astrocyte-perturbation-analysis',
      description:
        'Data analysis and visualization project for astrocyte perturbation studies. Includes analysis of log fold changes, calcium clusters, UMAP visualizations, and heatmaps to understand cellular responses to perturbations.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Jul 18, 2024',
      link: 'https://github.com/aashikmathew/astrocyte-perturbation-analysis',
    },
    {
      name: 'llm-red-teaming-platform',
      description:
        'A comprehensive enterprise-grade red teaming system for evaluating Large Language Models (LLMs). Features 5 attack categories (Jailbreak, Bias, Hallucination, Privacy, Manipulation), support for 4 LLM providers, real-time WebSocket monitoring, automated analysis, and professional PDF report generation.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Aug 25, 2024',
      link: 'https://github.com/aashikmathew/llm-red-teaming-platform',
    },
    {
      name: 'serverless-pipeline',
      description:
        'A modern, event-driven serverless architecture on Google Cloud Platform (GCP) for real-time data processing and validation. Features Cloud Run, Cloud Functions, Pub/Sub, Firestore, BigQuery, Terraform Infrastructure as Code, CI/CD pipeline, and comprehensive monitoring dashboards.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Dec 15, 2024',
      license: 'MIT License',
      link: 'https://github.com/aashikmathew/serverless-pipeline',
    },
    {
      name: 'NLP_Synergy',
      description:
        'NLP_Synergy is an end-to-end natural language processing project designed to perform key NLP tasks, including part-of-speech tagging (POS), named entity recognition (NER), and text classification. This project utilizes various NLP techniques such as Hidden Markov Models, the Stanford NER Tagger, TF-IDF, and Word2Vec embeddings, integrating syntactic parsing and statistical machine learning models.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'March 5, 2025',
      link: 'https://github.com/aashikmathew/NLP_Synergy',
    },
    {
      name: 'SpineFractureDetection',
      description:
        'AI-powered tool designed to detect and analyze spine fractures using advanced image processing techniques.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Dec 18, 2024',
      link: 'https://github.com/aashikmathew/SpineFractureDetection',
    },
    {
      name: 'Improved-iYOLO-v8-Fracture-detection',
      description:
        'Enhanced YOLO v8 implementation for pediatric wrist fracture detection with improved accuracy and reduced false positives.',
      language: 'Python',
      isPrivate: false,
      lastUpdated: 'Oct 15, 2024',
      license: 'MIT License',
      link: 'https://github.com/aashikmathew/Improved-iYOLO-v8-Fracture-detection-for-pediatric-wrist',
    },
    {
      name: 'Tweet-Sentiment-Analysis-using-Bertweet',
      description:
        'NLP application utilizing BERTweet model to analyze and classify sentiment in social media content.',
      language: 'Jupyter Notebook',
      isPrivate: false,
      lastUpdated: 'Dec 9, 2024',
      license: 'MIT License',
      link: 'https://github.com/aashikmathew/Tweet-Sentiment-Analysis-using-Bertweet',
    },
    {
      name: 'Web Tools for High-Resolution Ensemble Models of 3D Single-Cell Chromatin Conformations',
      description:
      'A web-based tool for visualizing and analyzing high-resolution ensemble models of 3D single-cell chromatin conformations to aid genomic research.',
      language: 'Jupyter Notebook',
      isPrivate: false,
      lastUpdated: 'Dec 6, 2024',
      fork: true,
      link: 'https://github.com/aashikmathewcodes/CS522_Project',
    },
    {
      name: 'RubyPlayground',
      description:
        'Repository serving as a hub for personal Ruby experiments and projects.',
      language: 'C++', 
      isPrivate: false,
      lastUpdated: 'Dec 10, 2024',
      link: 'https://github.com/aashikmathew/RubyPlayground',
    },
    {
      name: 'Distributed-Algorithms',
      description:
        'Implementation of distributed algorithms with focus on Snapshots and Elections.',
      language: 'Java',
      isPrivate: false,
      lastUpdated: 'Apr 30, 2024',
      license: 'Apache License 2.0',
      fork: true,
      link: 'https://github.com/aashikmathew/Distributed-Algorithms',
    },
    {
      name: 'Exploratory-Analysis-of-Rainfall-Data',
      description:
        'Data analysis of rainfall patterns in India focused on agricultural applications.',
      language: 'Jupyter Notebook',
      isPrivate: false,
      lastUpdated: 'Apr 16, 2024',
      license: 'MIT License',
      link: 'https://github.com/aashikmathew/Exploratory-Analysis-of-Rainfall-Data-in-India-for-Agriculture',
    },
    {
      name: 'Precision-farming-using-Data-Analytics',
      description:
        'Integration of data analytics and machine learning for precision agriculture applications.',
      language: 'Jupyter Notebook',
      isPrivate: false,
      lastUpdated: 'Mar 20, 2024',
      link: 'https://github.com/aashikmathew/Precision-farming-using-Data-Analytics-and-Machine-learning',
    },
  ];

  return (
    <motion.section
      className={styles.projects}
      id="projects"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.projectsHeading}>Projects</h2>
      <div className={styles.underline}></div>

      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <motion.div
            className={styles.projectCard}
            key={project.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={projectCardVariants}
          >
            <div className={styles.projectHeader}>
              <div className={styles.projectTitleContainer}>
                <h3>{project.name}</h3>
                <span className={styles.privacyIcon}>
                  <PrivateIcon isPrivate={project.isPrivate} />
                </span>
              </div>
              <div className={styles.langBadge}>
                <LanguageIcon language={project.language} />
                <span>{project.language}</span>
              </div>
            </div>

            <p>{project.description}</p>

            <div className={styles.projectFooter}>
              <div className={styles.projectMeta}>
                {project.license && (
                  <span className={styles.licenseBadge}>
                    <LicenseIcon /> {project.license}
                  </span>
                )}
                <span className={styles.updatedInfo}>
                  <UpdateIcon /> Updated on {project.lastUpdated}
                </span>
                {project.fork && (
                  <span className={styles.forkBadge}>
                    <ForkIcon /> Forked
                  </span>
                )}
              </div>

              <div className={styles.projectLinks}>
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    className={styles.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLinkIcon /> <span>View Live</span>
                  </motion.a>
                )}
                <motion.a
                  href={project.link}
                  className={styles.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon /> <span>View on GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}