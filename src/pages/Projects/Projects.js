import React, { Component } from "react";
import { Link } from "@reach/router";
import ProjectCard from "components/common/ProjectCard";
import styles from "./Projects.module.css";
import * as projects from "api/PortfolioData.js";

class Projects extends Component {
  render() {
    return (
      <section className={styles.projects}>
        <h1>Projects</h1>
        <section className={styles.portRow}>
          {Object.values(projects).map(({ img, name, pagename }) => {
            const image = require(`assets/projects/${img}`);
            return (
              <Link to={`/projects/${pagename}`} key={name}>
                <ProjectCard title={name} image={image} />
              </Link>
            );
          })}
        </section>
      </section>
    );
  }
}

export default Projects;
