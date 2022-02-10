import React from 'react';
import { Link } from 'react-router-dom';
import samImage from '../../assets/images/sam.JPG'

function Nav() {
  return (
    <header>
      <h2 className="flex-row align-center-xl">
        <img src={samImage} alt="Sam" className="profile_img mx-2 my-2 " />
        <Link to="/">
        <h3 className="link">Sam Davenport</h3>
        </Link>
      </h2>
      <nav>
        <ul className="flex-row justify-space-around-xl">
          <li className="mx-2">
          <Link to="/">
            <h4 className="link">Bio</h4>
            </Link>
          </li>
          <li className="mx-2">
          <Link to="/projects">
            <h4 className="link">Projects</h4>
            </Link>
          </li>
          <li className="mx-2">
            <h4 className="link">Contact</h4>
          </li>
          <li className="mx-2">
            <h4 className="link">Resume</h4>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;