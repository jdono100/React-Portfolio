import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div id="appDiv" className="overflow-hidden">
      <Navbar />
      <div id="contentDiv">
        <Header />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
