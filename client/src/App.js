import React, { useState, } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bio from './components/Bio'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ContactForm from './components/Contact';
function App() {
  const [linkSelected, setLinkSelected] = useState('');
  

  const handleLinkChange = (link) => setLinkSelected(link);
  return (
    <Router>
    <div>
      <Nav linkSelected={linkSelected} handleLinkChange={handleLinkChange}></Nav>
      <main className="container">
        <Switch>
        <Route exact path="/" component={Bio} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={ContactForm} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
