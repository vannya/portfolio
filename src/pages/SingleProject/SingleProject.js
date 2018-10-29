import React, { Component } from "react";
import Button from "components/common/Button";
import styles from "./SingleProject.module.css";

class SingleProject extends Component {
  render() {
    const { projects, projectID } = this.props;
    const { name, img, description, livelink, github } = projects[projectID];
    const image = require(`assets/projects/${img}`);
    return (
      <section className={styles.singleProject}>
        <h1>{name}</h1>
        <p>{description}</p>
        <section className={styles.image}>
          <img src={image} alt={name} />
        </section>
        <section className={styles.links}>
          <a href={livelink}>
            <Button text="Live Demo" />
          </a>
          <a href={github}>
            <Button text="View Code" />
          </a>
        </section>
      </section>
    );
  }
}
export default SingleProject;
