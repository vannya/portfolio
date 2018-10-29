import React, { Component } from "react";
import rocks from "assets/VanRocks-300x300.jpg";
import styles from "./About.module.css";
class About extends Component {
  state = {};
  render() {
    return (
      <section className={styles.about}>
        <h1>Meet Van</h1>
        <section className={styles.center}>
          <section className={styles.images}>
            <img src={rocks} alt="Van Tabbert" align="left" />
            <p>Who Am I?</p>
            <p>What am I doing currently?</p>
            <p>What are my interest outside development?</p>
            <p>
              Where can I be contacted? This information will all align properly
              once the information is in place.
            </p>
          </section>
        </section>
      </section>
    );
  }
}
export default About;
