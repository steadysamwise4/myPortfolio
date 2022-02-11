import React from 'react';
import { Link } from 'react-router-dom';
import samImage from '../../assets/images/sam.JPG'

function Nav() {
  return (
    <header>
      <section className="flex-row align-center justify-center col-12">
        <img src={samImage} alt="Sam" className="profile_img mx-2 my-2 " />
        <Link to="/">
          <h1 className="link">Sam Davenport</h1>
        </Link>

        <nav className="col-12 py-0 my-2">
          <div className="flex-row justify-space-around nav-border">
            
              <Link to="/" className='nav-link'>
                <h4 className="link">Bio</h4>
              </Link>
            
            
              <Link to="/projects" className='nav-link'>
                <h4 className="link">Projects</h4>
              </Link>
            
           
              <Link to="/" className='nav-link'>
                <h4 className="link" >Contact</h4>
              </Link>
            
           
              <Link to="/" className='nav-link'>
                <h4 className="link">Resume</h4>
              </Link>
            
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Nav;