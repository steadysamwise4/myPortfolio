import React from 'react';
import resumeImg from '../../assets/images/resume3.png';




function Resume () {
    
    return (
      <section className="container">
        <h1>Skills and Resume</h1>
        <div className='flex-row justify-space-around'>
        <div>
          <h4>Skills include:</h4>
          <ul>
            <li key="P0">JavaScript</li>
            <li key="P1">CSS</li>
            <li key="P2">mySQL</li>
            <li key="P3">MongoDB</li>
            <li key="P4">Mongoose</li>
            <li key="P5">Node</li>
            <li key="P6">Express</li>
            <li key="P7">Sequelize</li>
            <li key="P8">React</li>
          </ul>
        </div>
        <div >
            <a href='https://www.linkedin.com/in/davenportsam44/overlay/1635483205238/single-media-viewer?type=DOCUMENT&profileId=ACoAADbV8k0BEFmQ1LzNApBAd2BhVkaP3U4hfgo&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BB3FzVd7zRK2jRLr8scKdJg%3D%3D' >
            <img src={resumeImg} alt='resume' />
            <h6 className='text-center'>Download resume</h6>
            </a>
        </div>
        </div>
      </section>
    );
}

export default Resume;