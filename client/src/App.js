import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import NoMatch from './components/NoMatch';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [linkSelected, setLinkSelected] = useState('');

  const handleLinkChange = (link) => setLinkSelected(link);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav
            linkSelected={linkSelected}
            handleLinkChange={handleLinkChange}
          ></Nav>
          <main className='container'>
            <Routes>
              <Route exact path='/' element={<Bio />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/contact' element={<ContactForm />} />
              <Route exact path='/resume' element={<Resume />} />
              <Route component={NoMatch} />
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
