import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DynamicBackground from '../components/DynamicBackground';
import Intro from '/components/Intro';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Aashik's Portfolio</title>
        <meta name="description" content="Aashik's Portfolio: Projects, Experience & Skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Dynamic 3D Background */}
      <DynamicBackground />
      
      {/* Intro overlay */}
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
