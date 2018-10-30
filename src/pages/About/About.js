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
            <p>
              I'm a Full Stack Web and Mobile Application Developer creating 
              accessible, mobile-ready applications with engaging user 
              interfaces.
            </p>
            <p>
              As part of an Agile international team at Walmart, I use React and React Native 
              frameworks to develop internal applications to help Associates in their 
              daily work environment. I partner with multiple development teams to support
               optimization, architecture, accessibility and specific feature development. 
            </p>
            <p>
              Outside of my current role, I partner with nonprofits and local businesses to create 
              websites and mobile applications using WordPress (JS/PHP), ReactJS, React Native and 
              Native Android. My focus is on reaching customers, donors, and recipients using modern 
              UI/UX principles and SEO optimization for maximum reach. 
            </p>
            <p>
              When I'm not behind a computer, you can find me exploring Arkansas' parks and trails, at the local gym or volunteering as a STEM mentor. 
            </p>
            <p>Would you like to know more? Find me on <a href="https://www.linkedin.com/in/vannya/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/vannya" target="_blank" rel="noopener noreferrer">Github</a>, <a href="https://twitter.com/vannyalock" target="_blank" rel="noopener noreferrer">Twitter</a> or <a href="https://www.instagram.com/minimalvannya/" target="_blank" rel="noopener noreferrer">Instagram</a>.  Would you like me on your development project? Contact me at <a href="mailto:van@tabberttechnologies.com">van@tabberttechnologies</a> with all the information!</p>
          </section>
        </section>
      </section>
    );
  }
}
export default About;
