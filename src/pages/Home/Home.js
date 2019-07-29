import React from 'react';
import Typist from 'react-typist';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeOverlay}>
        <section className={styles.typingWrapper}>
          <div className={styles.headerIntro}>HELLO, MY NAME IS</div>
          <div className={styles.headerName}>VAN</div>
          <div className={styles.headerName}>TABBERT</div>
          <Typist className={styles.MyTypist} cursor={{ hideWhenDone: true }}>
            <Typist.Delay ms={2000} />
            <span className={styles.typedWords}>I am a Web Developer.</span>
            <Typist.Backspace count={14} delay={1200} />
            <Typist.Delay ms={1300} />
            <span className={styles.typedWords}>Mobile Developer.</span>
            <Typist.Backspace count={17} delay={1200} />
            <Typist.Delay ms={1200} />
            <span className={styles.typedWords}>Minimalist.</span>
            <Typist.Backspace count={11} delay={1200} />
            <Typist.Delay ms={1500} />
            <span className={styles.typedWords}>Number Cruncher.</span>
            <Typist.Backspace count={16} delay={1200} />
            <Typist.Delay ms={1100} />
            <span className={styles.typedWords}>Secret Mermaid.</span>
            <Typist.Backspace count={15} delay={1200} />
            <Typist.Delay ms={1000} />
            <span className={styles.typedWords}>Developer.</span>
          </Typist>
        </section>
      </div>
    </section>
  );
};

export default Home;
