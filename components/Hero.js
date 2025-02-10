import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>
        <Link href="/">Aashik's Portfolio</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </motion.header>
  );
}
