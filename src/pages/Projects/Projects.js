import React, { Component } from "react";
import { Link } from "@reach/router";
import ProjectCard from "components/common/ProjectCard";
import styles from "./Projects.module.css";
import * as react from "api/ReactData.js";
import * as wordpress from "api/WordPressData.js";
// import * as reactnative from "api/ReactNativeData.js";

class Projects extends Component {
  state = {
    activeList: react,
    type: "react"
  }

  renderApps = () => {
    const {activeList, type} = this.state;
    return (
      Object.values(activeList).map(({ img, name, pagename }) => {
        const image = require(`assets/projects/${img}`);
        return (
          <Link to={`/projects/${type}/${pagename}`} key={name}>
            <ProjectCard title={name} image={image} />
          </Link>
        );
      })
    )
  }

  render() {
    const {type} = this.state;
    return (
      <section className={styles.projects}>
        <h1>Projects</h1>
        <section className={styles.toggle}>
          <button className={type === "react" ? styles.activeButton : styles.button} onClick={() => this.setState({activeList: react, type: "react"})}>React Projects</button>
          <button className={type === "wordpress" ? styles.activeButton : styles.button} onClick={() => this.setState({activeList: wordpress, type: "wordpress"})}>WordPress/php Projects</button>
{/**          <button className={type === "reactnative" ? styles.activeButton : styles.button} onClick={() => this.setState({activeList: reactnative, type: "reactnative"})}>React Native Projects</button>*/}
        </section>
        <section className={styles.portRow}>
          {this.renderApps()}
        </section>
      </section>
    );
  }
}

export default Projects;
