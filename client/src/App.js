import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header'

function App() {
  return (
    <div id="appDiv" className="overflow-hidden">
      <Navbar />
      <div id="contentDiv">
        <Header />
      </div>
    </div>
  );
}

export default App;
