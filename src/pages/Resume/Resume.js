import React, { Component } from "react";
import styles from "./Resume.module.css";
import image from "assets/van.jpg";
import resume from "VanTabbertResume.pdf";

// Still needs additionally refactoring.
class Resume extends Component {
  state = {};
  render() {
    return (
      <section className={styles.resume}>
        <h1>Resume</h1>
        <section className={styles.resumeDownload}>
          <a href={resume} target="_blank" rel="noopener noreferrer">Download My Resume</a>
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
                  Full stack web and mobile application developer with
                  experience using modern JavaScript libraries and native
                  Android development. Analytical problem solver with the
                  ability to quickly learn new technologies and languages.
                  Skilled multitasker comfortable working within a team and
                  independently. Enthusiastic mentor motivated to guide other
                  developers to their full potential.
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
                    w:{" "}
                    <a
                      className={styles.resumeLink}
                      href="https://www.vannya.me"
                    >
                      www.vannya.me
                    </a>
                  </div>
                </div>
                <div className={styles.resumeContactGroup}>
                  <div className={styles.resumeText}>
                    <i className="fab fa-facebook" />{" "}
                    <a
                      className={styles.resumeLink}
                      href="https://www.facebook.com/vannienicole"
                    >
                      facebook.com/vannienicole
                    </a>
                  </div>
                  <div className={styles.resumeText}>
                    <i className="fab fa-github" />{" "}
                    <a
                      className={styles.resumeLink}
                      href="https://github.com/vannya"
                    >
                      github.com/vannya
                    </a>
                  </div>
                  <div className={styles.resumeText}>
                    <i className="fab fa-linkedin" />{" "}
                    <a
                      className={styles.resumeLink}
                      href="https://www.linkedin.com/in/vannya/"
                    >
                      linkedin.com/in/vannya/
                    </a>
                  </div>
                  <div className={styles.resumeText}>
                    <i className="fab fa-twitter" />{" "}
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
                  HTML5, CSS3, ES6, Redux, React Router V4, Reach Router,
                  Node.js, Express, Sass, Wordpress, Git/Version Control,
                  Photoshop, InDesign.
                </div>
                <div className={styles.resumeText}>
                  <strong>Knowledgable:</strong> Electron, SQL, MongoDB,
                  Webpack, GraphQL, Android, php, Java, C++, Illustrator
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
                      Develop internal applications using both React and React
                      Native frameworks.
                    </li>
                    <li>
                      Partnering with development team members across the globe
                      to create applications that help Associates in their daily
                      work environments.
                    </li>
                    <li>
                      Supporting other teams’ development projects as needed.
                      I.e. project architecture mapping, specific feature
                      development and application optimization.
                    </li>
                    <li>
                      Mentoring junior developers with 1:1 React/React Native
                      teaching sessions and career/ goal planning.
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
                      Partnering with nonprofits and local businesses to create
                      websites and mobile applications using WordPress (JS/PHP),
                      ReactJS, React Native and Native Android.
                    </li>
                    <li>
                      Focusing on reaching customers, donors, and recipients
                      using modern UI/UX principles and SEO optimization for
                      maximum reach.
                    </li>
                  </ul>
                </div>
                <div className={styles.resumeGroup}>
                  <div className={styles.resumePosition}>
                    Frontend Developer
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
              <div className={styles.resumeSectionBottomSpace}>
                <div className={styles.resumeSubheader}>PROJECTS</div>
                <div className={styles.resumeSubheaderUnderline} />
                <div className={styles.resumeText}>
                  <a className={styles.resumeLink} href="https://chingu.io/">
                    Chingu.io
                  </a>
                  : Front end development of the Chingu Development Network
                  client using React and interfacing with a
                  Node/GraphQL/PostgreSQL backend.
                </div>
                <div className={styles.resumeText}>
                  <a
                    className={styles.resumeLink}
                    href="http://designsteins.com/"
                  >
                    Designsteins
                  </a>
                  : Design company site using React, routing and map
                  integration.
                </div>
                <div className={styles.resumeText}>
                  <a
                    className={styles.resumeLink}
                    href="https://modmemes.herokuapp.com/"
                  >
                    ModMemes
                  </a>
                  : Meme Library web application using MERN stack.
                </div>
                <div className={styles.resumeText}>
                  <a
                    className={styles.resumeLink}
                    href="http://tuvototuidioma.com/"
                  >
                    TuVotoTuIdioma
                  </a>
                  : WordPress based informational site for a non-profit, All
                  Voting Is Local, using php, jQuery and HTML5/CSS3.
                </div>
                <div className={styles.resumeText}>
                  <a
                    className={styles.resumeLink}
                    href="https://junipermail.herokuapp.com/"
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
                  >
                    Bearbnb
                  </a>
                  : Clone of Airbnb using ReactJS/Redux, Express, Node.js and
                  MongoDB.
                </div>
                <div className={styles.resumeText}>
                  <a
                    className={styles.resumeLink}
                    href="https://www.npmjs.com/package/vannya-mern-app"
                  >
                    Vannya-MERN-app
                  </a>
                  : NPM published boilerplate package for creating MERN apps.
                </div>
                <div className={styles.resumeText}>
                  <a
                    className={styles.resumeLink}
                    href="https://vannya.github.io/momentum-clone/"
                  >
                    Momentum
                  </a>
                  : Clone of productivity Chrome Tab Extension using
                  React/Firebase.
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
                    Associates of Applied Science, Software Development
                  </div>
                  <div className={styles.resumeTitle}>
                    North Lake College - Irving, TX
                  </div>
                  <div className={styles.resumeDate}>Dec 2017</div>
                  <ul>
                    <li>
                      Programming in Java and C++. President’s Honor Roll.
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
                    <li>
                      Areas: Accounting, Calculus, Geology and Photography
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </section>
      </section>
    );
  }
}
export default Resume;
