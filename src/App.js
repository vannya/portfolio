import React, { Component } from 'react';
import { Router } from "@reach/router";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import './App.css';

let About = () => <div>About</div>
let Projects = () => <div>Projects</div>
let Resume = () => <div>Resume</div>
let Footer = () => <div>Footer</div>
const NotFound = () => <p>Sorry, nothing here</p>

class App extends Component {
  render() {
    return (
      <section>
        <Header />
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
