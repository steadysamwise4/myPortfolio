import React from 'react';
import resumeImg from '../../assets/images/resume3.png';

function Resume() {
  return (
    <section className='container'>
      <h1>Skills and Resume</h1>
      <div className='flex-row justify-space-around'>
        <div>
          <h4>Skills include:</h4>
          <ul className='flex-column'>
            <li key='P0'>JavaScript</li>
            <li key='P1'>CSS</li>
            <li key='P2'>mySQL</li>
            <li key='P3'>PostgreSQL</li>
            <li key='P4'>MongoDB</li>
            <li key='P5'>Mongoose</li>
            <li key='P6'>NodeJS</li>
            <li key='P7'>Express</li>
            <li key='P8'>Sequelize</li>
            <li key='P9'>React</li>
            <li key='P10'>GraphQL</li>
            <li key='P11'>VueJS</li>
            <li key='P12'>AngularJS</li>
            <li key='P13'>Typescript</li>
            <li key='P14'>NestJS</li>
            <li key='P15'>Flutter/Dart</li>
          </ul>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/davenportsam44/overlay/1733783237918/single-media-viewer?type=DOCUMENT&profileId=ACoAADbV8k0BEFmQ1LzNApBAd2BhVkaP3U4hfgo&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWTAqlunrSNaeIdWgJSQsOQ%3D%3D'
            target='_blank'
            rel='noreferrer'
          >
            <img src={resumeImg} alt='resume' />
            <h6 className='text-center'>Download resume</h6>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
