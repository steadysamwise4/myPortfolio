import React from 'react';
import './App.css';
import Bio from './components/Bio'
import Nav from './components/Nav'
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Bio></Bio>
      </main>
    </div>
  );
}

export default App;
