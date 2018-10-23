import React, { Component } from 'react';
import styles from  "./Home.module.css";

class Home extends Component {
  state = {  }
  render() {
    return (
      <section className={styles.home}>
        <section className={styles.homeOverlay}>
        </section>
      </section>
    );
  }
}

export default Home;
