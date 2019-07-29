import React, { useState } from 'react';
import { Link } from '@reach/router';
import ProjectCard from 'components/common/ProjectCard';
import styles from './Projects.module.css';
import * as react from 'api/ReactData.js';
import * as wordpress from 'api/WordPressData.js';
// import * as reactnative from "api/ReactNativeData.js";

const Projects = () => {
  const [type, setType] = useState('react');
  const renderApps = () => {
    let activeList;
    if (type === 'react') {
      activeList = react;
    } else {
      activeList = wordpress;
    }
    return Object.values(activeList).map(({ img, name, pagename }) => {
      const image = require(`assets/projects/${img}`);
      return (
        <Link to={`/projects/${type}/${pagename}`} key={name}>
          <ProjectCard title={name} image={image} />
        </Link>
      );
    });
  };
  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.toggle}>
        <button
          className={type === 'react' ? styles.activeButton : styles.button}
          onClick={() => setType('react')}
        >
          React Projects
        </button>
        <button
          className={type === 'wordpress' ? styles.activeButton : styles.button}
          onClick={() => setType('wordpress')}
        >
          WordPress/php Projects
        </button>
      </section>
      <section className={styles.portRow}>{renderApps()}</section>
    </section>
  );
};

export default Projects;
