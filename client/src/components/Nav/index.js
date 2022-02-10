import React from 'react';
import samImage from '../../assets/images/sam.JPG'

function Nav() {
  return (
    <header>
      <h2 className="flex-row align-center-xl">
        <img src={samImage} alt="Sam" className="profile_img mx-2 my-2 " />
        <h3>Sam Davenport</h3>
      </h2>
      <nav>
        <ul className="flex-row justify-space-around-xl">
          <li className="mx-2">
            <h4>Bio</h4>
          </li>
          <li className="mx-2">
            <h4>Projects</h4>
          </li>
          <li className="mx-2">
            <h4>Contact</h4>
          </li>
          <li className="mx-2">
            <h4>Resume</h4>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;