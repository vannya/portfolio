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
                  <a
                    className={styles.resumeLink}
                    href="https://www.vantabbert.com"
                  >
                    www.vantabbert.com
                  </a>
                </div>
              </div>
              <div className={styles.resumeContactGroup}>
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
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>TECHNICAL SKILLS</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeSectionBottomSpace}>
                <strong>Strong:</strong> ReactJS, JavaScript, C#/.NET, HTML5,
                CSS3, Redux, React Router V5, Reach Router, Azure, Node.js,
                Express, Sass, Wordpress, Git/Version Control, Photoshop,
                InDesign
              </div>
              <div className={styles.resumeText}>
                <strong>Knowledgable:</strong> Xamarin, React Native, Electron,
                SQL, MongoDB, php, Webpack, GraphQL, Android, Java, C++,
                Illustrator
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>CERTIFICATIONS</div>
              <div className={styles.resumeSubheaderUnderline} />
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>CompTIA A+</div>
                <div className={styles.resumeDate}>Mar 2021</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>
                  CIW User Interface Design
                </div>
                <div className={styles.resumeDate}>Sep 2020</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>
                  Microsoft Azure Fundamentals
                </div>
                <div className={styles.resumeDate}>Feb 2020</div>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumeText}>CompTIA Project+</div>
                <div className={styles.resumeDate}>Aug 2019</div>
              </div>
            </div>
            <div className={styles.resumeSection}>
              <div className={styles.resumeSubheader}>VOLUNTEER</div>
              <div className={styles.resumeSubheaderUnderline} />
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
                <div className={styles.resumePosition}>Software Engineer 2</div>
                <div className={styles.resumeLocation}>
                  CarMax - Richmond, VA
                </div>
                <div className={styles.resumeDate}>Nov 2019 - present</div>
                <ul>
                  <li>
                    Developing a side-by-side UX experience in React/.NET
                    replacing the legacy Order Processing experience and
                    connecting with 30+ microservices and third-party services.
                  </li>
                  <li>
                    Implemented Adobe Analytics integration to increase
                    real-time metric gathering.
                  </li>
                  <li>
                    Focus on UX accessibility and reusable design/development
                    for increased user experience.
                  </li>
                </ul>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumePosition}>Software Engineer 3</div>
                <div className={styles.resumeLocation}>
                  Walmart - Bentonville, AR
                </div>
                <div className={styles.resumeDate}>May 2018 - Oct 2019</div>
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
                    Mentor 5 junior developers with 1:1 development sessions
                    and/or career and goal planning.
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
                <div className={styles.resumeDate}>Sept 2018 - Sept 2019</div>
                <ul>
                  <li>
                    Consulting for more than a dozen nonprofits and local
                    businesses to create websites and applications using React
                    and WordPress (JS/PHP).
                  </li>
                  <li>
                    Focusing on reaching customers, donors, and recipients using
                    modern UI/UX principles and SEO optimization for maximum
                    reach.
                  </li>
                </ul>
              </div>
              <div className={styles.resumeGroup}>
                <div className={styles.resumePosition}>
                  Frontend Developer (Remote)
                </div>
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
                <div className={styles.resumeDate}>Apr 2021</div>
                <ul>
                  <li>
                    Programming in C#, UX/UI Design, Software Quality Assurance
                  </li>
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
