import React from 'react';
import Button from 'components/common/Button';
import styles from './SingleProject.module.css';

const SingleProject = ({ projects, projectID }) => {
  const { name, description, livelink, github, fullimg } = projects[projectID];
  const image = require(`assets/projects/${fullimg}`);
  return (
    <section className={styles.singleProject}>
      <h1>{name}</h1>
      <p>{description}</p>
      <section className={styles.image}>
        <img src={image} alt={name} />
      </section>
      <section className={styles.links}>
        {livelink && (
          <a href={livelink}>
            <Button text="Live Demo" />
          </a>
        )}
        {github && (
          <a href={github}>
            <Button text="View Code" />
          </a>
        )}
      </section>
    </section>
  );
};

export default SingleProject;
