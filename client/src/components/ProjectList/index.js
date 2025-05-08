import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: 'big_blue_website',
      description:
        'Website of my former employer, which I worked on for over 2 years.',
      owner: '', //bigblueswimschool
      url: 'https://bigblueswimschool.com',
    },
    {
      name: 'trippin-worldwide',
      description:
        "This application will provide a user the ability to journalize information about their travels such as description, start and end dates, city and country, activities, and cuisine as well as provide an opportunity to review/comment on other users' adventures. In addition, the most visited cities will be displayed via a map to help plan any future journeys. The web application uses Node.js and Express.js to create a RESTful API, Handlebars.js as a templating engine, MySQL and Sequelize ORM for the database, dotenv and bcrypt for securing sensitive data, bootstrap/CSS for styling, AWS S3 Bucket for storage, and Google Maps Geocoding and JavaScript APIs for mapping locations visited within a map view.",
      owner: 'hkapk',
      url: '', // https://trippin-worldwide.herokuapp.com/
    },
    {
      name: 'deep-thoughts',
      description:
        'Boot camp led MERN stack social media style app. Also using GraphQL API.',
      owner: 'steadysamwise4',
      url: '', //https://stormy-castle-07828.herokuapp.com/
    },
    {
      name: 'photo-port',
      description:
        'Boot camp led project done as a hands-on introduction to React.JS',
      owner: 'steadysamwise4',
      url: 'https://steadysamwise4.github.io/photo-port/',
    },
    {
      name: 'brilliant-tech',
      description:
        "Keep up with recent trends in programming by reading fellow developers' blog posts and linked articles. Create your own posts and link your favorite articles as well.",
      owner: 'steadysamwise4',
      url: '', //https://secret-temple-71857.herokuapp.com/
    },
    {
      name: 'dg-scorecard',
      description:
        'A PWA with which users are able to keep track of their score while playing disc golf, then access all of their scores and other data in their user account.',
      owner: 'steadysamwise4',
      url: '', //https://calm-peak-91863.herokuapp.com/
    },
    {
      name: 'explore_national_parks',
      description:
        'Explore National Parks is a Web Application that allows the user to view the details of all National Parks in America and plan their potential visit. The Application uses National Park Service API, OpenWeather API and is written in HTML, CSS and Javascript.',
      owner: 'steadysamwise4',
      url: 'https://steadysamwise4.github.io/explore_national_parks/',
    },
    {
      name: 'dg-scores-api',
      description:
        "NestJS Api - built to support a mobile-app for keeping track of and processing a user's disc golf scores.",
      owner: 'steadysamwise4',
      url: '',
    },
  ]);
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
    console.log(image, i);
  };

  return (
    <div className='my-2'>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      <div className='flex-row my-2 mx-2'>
        {projects.map((image, i) => (
          <div
            className='col-12 col-lg-5 mx-2 link'
            onClick={() => toggleModal(image, i)}
            key={image.name}
          >
            <h5>{image.name}</h5>
            <img
              src={require(`../../assets/images/${i}.png`)}
              alt={image.name}
              className='img-thumbnail mx-1'
              key={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
