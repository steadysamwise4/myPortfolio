import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bio from './components/Bio'
import Nav from './components/Nav'
import Projects from './components/Projects'
function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main className="container">
        <Switch>
        <Route exact path="/" component={Bio} />
        <Route exact path="/projects" component={Projects} />
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;
