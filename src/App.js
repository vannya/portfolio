import React from 'react';
import { Router } from '@reach/router';
import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';
import Resume from 'pages/Resume';
import SingleProject from 'pages/SingleProject';
import Footer from 'components/Footer';
import NavBar from 'components/Nav';
import * as react from 'api/ReactData.js';
import * as wordpress from 'api/WordPressData.js';
import * as reactnative from 'api/ReactNativeData.js';
import './App.css';

const NotFound = () => <p>Sorry, nothing here</p>;

const App = () => {
  return (
    <section className="app">
      <NavBar />
      <Router>
        <Home path="/" />
        <About path="about" />
        <Projects path="projects" />
        <SingleProject
          path="projects/react/:projectID"
          projects={react}
          type="react"
        />
        <SingleProject
          path="projects/wordpress/:projectID"
          projects={wordpress}
          type="wordpress"
        />
        <SingleProject
          path="projects/reactnative/:projectID"
          projects={reactnative}
          type="reactnative"
        />
        <Resume path="resume" />
        <NotFound default />
      </Router>
      <Footer>©2019 - Van Tabbert. All Rights Reserved.</Footer>
    </section>
  );
};

export default App;
