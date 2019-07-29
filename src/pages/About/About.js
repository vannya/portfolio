import React from 'react';
import rocks from 'assets/VanRocks-300x300.jpg';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h1>Meet Van</h1>
      <section className={styles.center}>
        <section className={styles.images}>
          <img src={rocks} alt="Van Tabbert" align="left" />
          <p>
            I'm a Full Stack Web and Mobile Application Developer creating
            accessible, mobile-ready applications with engaging user interfaces.
          </p>
          <p>
            As part of an Agile international team at Walmart, I use React and
            React Native frameworks to develop internal applications to help
            Associates in their daily work environment. I partner with multiple
            development teams to support optimization, architecture,
            accessibility and specific feature development.
          </p>
          <p>
            Currently, I am the Lead Frontend Developer on a technology focused
            ERP system integrating with both legacy and third party services. I
            developed the underlying structure of the application to be
            completely reusable and modular to allow for an almost "plug-in"
            type of enviroment. This will allow for future growth of the
            platform while giving teams the ability to manage their own codebase
            within the overall platform.
          </p>
          <p>
            Additionally, I am the Lead Developer and System Architect for the
            React UI Library suite used in both the ERP system and across our
            greater development team. This multi-package library contains
            presentational, structural, webchat and feedback components designed
            with UX principles and accessibility in mind. Each library also
            dynamically renders a custom documentation site that is hosted in
            Azure. Developers always have the most up-to-date documentation at
            their fingertips! The React Native companion libraries are on the
            horizon as well.
          </p>
          <p>
            Outside of my current role, I consult for nonprofits and local
            businesses to create websites and applications using React, .NET
            Core (C#), and WordPress (JS/PHP). My focus is on reaching
            customers, donors, and recipients using modern UI/UX principles and
            SEO optimization for maximum reach.
          </p>
          <p>
            When I'm not behind a computer, you can find me studying for my next
            exam or certification, exploring Arkansas' parks and trails, at the
            local gym or volunteering as a STEM mentor.
          </p>
          <p>
            Would you like to know more? Find me on{' '}
            <a
              href="https://www.linkedin.com/in/vannya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href="https://github.com/vannya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            , or{' '}
            <a
              href="https://twitter.com/vannyalock"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            . Would you like me on your development project? Contact me at{' '}
            <a href="mailto:van@tabberttechnologies.com">
              van@tabberttechnologies
            </a>{' '}
            with all the information!
          </p>
        </section>
      </section>
    </section>
  );
};

export default About;
