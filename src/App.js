import React, { Component } from 'react';
import { Router } from "@reach/router";

import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";
import Resume from "pages/Resume";

import Footer from "components/Footer";
import NavBar from "components/Nav";
import './App.css';

const NotFound = () => <p>Sorry, nothing here</p>

class App extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <Router>
          <Home path="/" />
          <About path="about" />
          <Projects path="projects" />
          <Resume path="resume" />
          <NotFound default />
        </Router>
        <Footer />
      </section>
    );
  }
}

export default App;
