import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from '../styles/Intro.module.css';
import {
  FaReact,
  FaPython,
  FaAws,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaRaspberryPi,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGoogle,
  FaMicrosoft,
  FaLinux,
} from 'react-icons/fa';
import { SiTensorflow, SiKubernetes, SiMongodb, SiPostgresql } from 'react-icons/si';

const TECH_ICONS = [
  <FaReact key="react" />,
  <FaPython key="python" />,
  <FaAws key="aws" />,
  <FaNodeJs key="node" />,
  <FaDocker key="docker" />,
  <FaGitAlt key="git" />,
  <FaDatabase key="db" />,
  <FaRaspberryPi key="pi" />,
  <FaJsSquare key="js" />,
  <FaHtml5 key="html" />,
  <FaCss3Alt key="css" />,
  <FaGoogle key="google" />,
  <FaMicrosoft key="microsoft" />,
  <FaLinux key="linux" />,
  <SiTensorflow key="tf" />,
  <SiKubernetes key="k8s" />,
  <SiMongodb key="mongo" />,
  <SiPostgresql key="postgres" />,
];

export default function Intro({ onFinish }) {
  const fullName = "Aashik Mathew Prosper";
  const jobTitles = [
    "Software Developer",
    "Full-Stack Engineer",
    "Machine Learning Enthusiast",
    "Innovator"
  ];

  const [typedName, setTypedName] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) {
        clearInterval(interval);
        setNameComplete(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullName]);

  // Job title cycle
  useEffect(() => {
    if (!nameComplete) return;
    const interval = setInterval(() => {
      setJobIndex(prev => (prev + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [nameComplete, jobTitles.length]);

  // Auto-dismiss
  useEffect(() => {
    const timeout = setTimeout(() => onFinish(), 8000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  // Particles config
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // Generate random viewport positions
  const getRandomPosition = () => ({
    x: Math.random() * 150 - 25, // 150vw range centered
    y: Math.random() * 150 - 25,
    scale: Math.random() * 0.5 + 0.5
  });

  return (
    <AnimatePresence>
      <motion.div
        className={styles.introContainer}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ y: "100vh", opacity: 0, transition: { duration: 1 } }}
      >
        {/* Animated Gradient Background */}
        <div className={styles.gradientBackground} />

        {/* Particles Background */}
        <Particles
          init={particlesInit}
          className={styles.particles}
          options={{
            fullScreen: false,
            particles: {
              number: { value: 80 },
              color: { value: "#ffffff" },
              opacity: { value: 0.3 },
              size: { value: 1 },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
              },
            },
          }}
        />

        {/* Floating Tech Icons */}
        <div className={styles.techGrid}>
          {TECH_ICONS.map((Icon, index) => {
            const start = getRandomPosition();
            const mid = getRandomPosition();
            const end = getRandomPosition();

            return (
              <motion.div
                key={index}
                className={styles.techIcon}
                initial={{
                  opacity: 0,
                  x: `${start.x}vw`,
                  y: `${start.y}vh`,
                  scale: 0.8,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  x: [`${start.x}vw`, `${mid.x}vw`, `${end.x}vw`],
                  y: [`${start.y}vh`, `${mid.y}vh`, `${end.y}vh`],
                  scale: [0.8, 1.5, 0.8],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15 + Math.random() * 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {Icon}
              </motion.div>
            )
          })}
        </div>

        {/* Content Overlay */}
        <div className={styles.contentOverlay}>
          <div className={styles.introContent}>
            <motion.div
              className={styles.imageContainer}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src="/profile-pic.jpg"
                alt="Profile"
                className={styles.profilePic}
              />
            </motion.div>

            <motion.h1 className={styles.name}>
              {typedName}
              <motion.span
                className={styles.cursor}
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                |
              </motion.span>
            </motion.h1>

            {nameComplete && (
              <div className={styles.jobContainer}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={jobIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.jobTitle}
                  >
                    {jobTitles[jobIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}