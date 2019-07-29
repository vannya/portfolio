import React from 'react';
import styles from './Resume.module.css';
import image from 'assets/van.jpg';
import resume from 'VanTabbertResume.pdf';

const Resume = () => {
  return (
    <section className={styles.resume}>
      <h1>Resume</h1>
      <section className={styles.resumeDownload}>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Download My Resume
        </a>
      </section>
      <section className={styles.resumeWrapper}>
        <header className={styles.resumeHeader}>
          <section className={styles.resumeHeaderLeft}>
            <img src={image} alt="Van Tabbert" height="200px" width="200px" />
          </section>
          <section className={styles.resumeHeaderRight}>
            <h1>VAN TABBERT</h1>
            <h2>MOBILE AND WEB DEVELOPER</h2>
          </section>
        </header>
        <main className={styles.resumeBody}>
          <section className={styles.resumeBodyLeft}>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>PROFILE</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeText}>
                Full stack web and mobile application developer with experience
                using modern JavaScript libraries and cloud integration.
                Analytical problem solver with the ability to quickly learn new
                technologies and languages. Skilled multitasker comfortable
                working within a team and independently. Enthusiastic mentor
                motivated to guide other developers to their full potential.
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>CONTACT ME</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeContactGroupTop}>
                <div className={styles.resumeText}>t: (817)908-7911</div>
                <div className={styles.resumeText}>
                  e: van.tabbert@gmail.com
                </div>
                <div className={styles.resumeText}>
                  w:{' '}
                  <a className={styles.resumeLink} href="https://www.vannya.me">
                    www.vannya.me
                  </a>
                </div>
              </div>
              <div className={styles.resumeContactGroup}>
                <div className={styles.resumeText}>
                  <i className="fab fa-facebook" />{' '}
                  <a
                    className={styles.resumeLink}
                    href="https://www.facebook.com/vannienicole"
                  >
                    facebook.com/vannienicole
                  </a>
                </div>
                <div className={styles.resumeText}>
                  <i className="fab fa-github" />{' '}
                  <a
                    className={styles.resumeLink}
                    href="https://github.com/vannya"
                  >
                    github.com/vannya
                  </a>
                </div>
                <div className={styles.resumeText}>
                  <i className="fab fa-linkedin" />{' '}
                  <a
                    className={styles.resumeLink}
                    href="https://www.linkedin.com/in/vannya/"
                  >
                    linkedin.com/in/vannya/
                  </a>
                </div>
                <div className={styles.resumeText}>
                  <i className="fab fa-twitter" />{' '}
                  <a
                    className={styles.resumeLink}
                    href="https://www.twitter.com/vannyalock"
                  >
                    twitter.com/vannyalock
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>TECHNICAL SKILLS</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeSectionBottomSpace}>
                <strong>Strong:</strong> ReactJS, React Native, JavaScript,
                HTML5, CSS3, ES6, Redux, React Router V4, Reach Router, Node.js,
                Express, Sass, WordPress, Git/Version Control, Photoshop,
                InDesign
              </div>
              <div className={styles.resumeText}>
                <strong>Knowledgable:</strong> C#, Electron, GraphQL, NoSQL,
                SQL, Webpack, Android, PHP, Java, C++, Sketch, Illustrator,
                Azure, Azure functions
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>CERTIFICATIONS</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>
                  FCC Front End Certificate
                </div>
                <div className={styles.resumeDate}>Feb 2018</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>
                  Android Basics Nanodegree
                </div>
                <div className={styles.resumeDate}>Apr 2018</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>
                  Full Stack Dev Nanodegree
                </div>
                <div className={styles.resumeDate}>May 2018</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>
                  Front End Dev Nanodegree
                </div>
                <div className={styles.resumeDate}>Jul 2018</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>React Nanodegree</div>
                <div className={styles.resumeDate}>Aug 2018</div>
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>VOLUNTEER</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeGroup}>
                <div className={styles.resumeTitle}>Mew Cat Rescue</div>
                <div className={styles.resumeDate}>Feb 2019 - present</div>
                <div className={styles.resumeText}>Developer and Designer</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeTitle}>Mercy House</div>
                <div className={styles.resumeDate}>Aug 2014 - Oct 2017</div>
                <div className={styles.resumeText}>Photographer</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeTitle}>Girl Scouts of USA</div>
                <div className={styles.resumeDate}>Aug 2010 - May 2012</div>
                <div className={styles.resumeText}>
                  Daisy and Brownie Leader
                </div>
              </div>
            </div>
          </section>
          <div className={styles.resumeBodyRight}>
            <div className={styles.resumeSectionBottomSpace}>
              <div className={styles.resumeSubheader}>EXPERIENCE</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeGroup}>
                <div className={styles.resumePosition}>Software Engineer</div>
                <div className={styles.resumeLocation}>
                  Walmart - Bentonville, AR
                </div>
                <div className={styles.resumeDate}>May 2018 - present</div>
                <ul>
                  <li>
                    Lead Frontend Developer of a nine person team building a
                    custom ERP system integrating with microservice APIs (C#,
                    Node, Python), legacy applications and third-party services.
                  </li>
                  <li>
                    Lead Developer and Systems Architect for React UI Library
                    suite encompassing designs for structural, presentational,
                    chatbot and feedback components with dynamically rendered
                    web documentation.
                  </li>
                  <li>
                    Building modern backend APIs as Azure Functions (Node and
                    C#) or standalone .NET Core Web APIs with extensive Swagger
                    documentation to efficiently handle requests of up to 30,000
                    active users.
                  </li>
                  <li>
                    Led 3 full-day workshops on design handoff between UX and
                    development teams. Presented talks to multiple audiences
                    promoting increased reusability in code and design.
                  </li>
                  <li>
                    Support other teams’ development projects as needed. I.e.
                    project architecture mapping, specific feature development
                    and application optimization.
                  </li>
                  <li>
                    Mentor 5 junior developers and 1 junior designer with 1:1
                    React teaching sessions and/or career and goal planning.
                  </li>
                </ul>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumePosition}>
                  Mobile and Web Application Developer
                </div>
                <div className={styles.resumeLocation}>
                  Tabbert Technologies, LLC - Bentonville, AR
                </div>
                <div className={styles.resumeDate}>Sept 2018 - present</div>
                <ul>
                  <li>
                    Consulting for more than a dozen nonprofits and local
                    businesses to create websites and applications using React,
                    .NET Core (C#), and WordPress (JS/PHP).
                  </li>
                  <li>
                    Focusing on reaching customers, donors, and recipients using
                    modern UI/UX principles and SEO optimization for maximum
                    reach.
                  </li>
                </ul>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumePosition}>Frontend Developer</div>
                <div className={styles.resumeLocation}>
                  Chingu - Toronto, Canada
                </div>
                <div className={styles.resumeDate}>Jul 2017 - Jun 2018</div>
                <ul>
                  <li>
                    Front end development of the original Chingu Developer
                    Network client using React and interfacing with a
                    Node/GraphQL/PostgreSQL backend.
                  </li>
                  <li>
                    Facilitate 8-10 week long Voyage cohorts of 350 persons
                    across 75 nations.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.resumeSectionBottomSpace}>
              <div className={styles.resumeSubheader}>PROJECTS</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="https://chingu.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chingu.io
                </a>
                : Front end development of the Chingu Development Network client
                using React and interfacing with a Node/GraphQL/PostgreSQL
                backend.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="https://www.npmjs.com/package/vannya-mern-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vannya-MERN-app
                </a>
                : NPM published boilerplate package for creating MERN
                applications with auth and database connection wizard.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="http://ourmilitarykids.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OurMilitaryKids
                </a>
                : Complete custom WordPress theme for national non-profit
                organization that has helped over 66,000 military children.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="http://designsteins.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Designsteins
                </a>
                : Design company custom WP theme built with PHP and JS.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="http://iamsogal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IAmSoGal
                </a>
                : Flexible WordPress custom theme for international venture
                capital firm.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="https://modmemes.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ModMemes
                </a>
                : Meme Library web application using MERN stack.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="http://tuvototuidioma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TuVotoTuIdioma
                </a>
                : WordPress based informational site for a non-profit, All
                Voting Is Local, using PHP, jQuery and HTML5/CSS3.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="https://junipermail.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JuniperMail
                </a>
                : Survey generation site using MERN stack with Stripe and
                Sendgrid.
              </div>
              <div className={styles.resumeText}>
                <a
                  className={styles.resumeLink}
                  href="https://bearbnb-06.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bearbnb
                </a>
                : Clone of Airbnb using ReactJS/Redux, Express, Node.js and
                MongoDB.
              </div>
              <div className={styles.resumeText}>
                <a className={styles.resumeLink} href="vannya.me/">
                  Vannya.me
                </a>
                : Personal portfolio site using React where my work can be
                found.
              </div>
            </div>
            <div className="resume-education">
              <div className={styles.resumeSubheader}>EDUCATION</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeGroup}>
                <div className={styles.resumeTitle}>
                  Bachelors of Science, Software Development
                </div>
                <div className={styles.resumeTitle}>
                  Western Governors University
                </div>
                <div className={styles.resumeDate}>Expected Sept 2020</div>
                <ul>
                  <li>C#, JavaScript, Mobile Apps, SQL, UI and UX.</li>
                </ul>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeTitle}>
                  Associates of Applied Science, Software Development
                </div>
                <div className={styles.resumeTitle}>
                  North Lake College - Irving, TX
                </div>
                <div className={styles.resumeDate}>Dec 2017</div>
                <ul>
                  <li>
                    Programming in Java, C# and C++. President’s Honor Roll.
                  </li>
                </ul>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeTitle}>
                  Associates of Arts, Liberal Studies
                </div>
                <div className={styles.resumeTitle}>
                  North Lake College - Irving, TX
                </div>
                <div className={styles.resumeDate}>May 2017</div>
                <ul>
                  <li>Areas: Accounting, Calculus, Geology and Photography</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
};

export default Resume;
