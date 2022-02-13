import React from 'react';
import { Link } from 'react-router-dom';
import samImage from '../../assets/images/sam.JPG'

function Nav( {linkSelected, handleLinkChange }) {
  return (
    <header>
      <section className="flex-row align-center justify-center col-12">
        <img src={samImage} alt="Sam" className="profile_img mx-2 my-2 " />
        <Link to="/" onClick={() => handleLinkChange('Bio')}>
          <h1 className={linkSelected === 'Bio' ? "no-link" : "link"}>Sam Davenport</h1>
        </Link>

        <nav className="col-12 py-0 my-2">
          <div className="flex-row justify-space-around nav-border">
            
              <Link to="/" className='nav-link' onClick={() => handleLinkChange('Bio')}>
                <h4 className={linkSelected === 'Bio' ? "link navActive" : "link"}>Bio</h4>
              </Link>
            
            
              <Link to="/projects" className='nav-link' onClick={() => handleLinkChange('Projects')}>
                <h4 className={linkSelected === 'Projects' ? "link navActive" : "link"}>Projects</h4>
              </Link>
            
           
              <Link to="/contact" className='nav-link' onClick={() => handleLinkChange('Contact')}>
                <h4 className={linkSelected === 'Contact' ? "link navActive" : "link"} >Contact</h4>
              </Link>
            
           
              <Link to="/" className='nav-link' onClick={() => handleLinkChange('Resume')}>
                <h4 className={linkSelected === 'Resume' ? "link navActive" : "link"}>Resume</h4>
              </Link>
            
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Nav;