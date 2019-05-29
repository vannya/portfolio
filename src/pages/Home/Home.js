import React, { Component } from 'react';
import styles from './Home.module.css';
import Typist from 'react-typist';

class Home extends Component {
  state = {};

  renderTypewriter = () => {};

  render() {
    return (
      <section className={styles.home}>
        <section className={styles.homeOverlay}>
          <section className={styles.typingWrapper}>
            <section className={styles.headerIntro}>HELLO, MY NAME IS</section>
            <section className={styles.headerName}>VAN</section>
            <section className={styles.headerName}>TABBERT</section>
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
        </section>
      </section>
    );
  }
}

export default Home;

// <section className={styles.headerTypewriter}>
//               I'M A MOBILE AND WEB APP DEVELOPER.
//             </section>
