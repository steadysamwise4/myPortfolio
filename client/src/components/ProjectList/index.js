import React, { useState } from 'react'
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: "trippin worldwide",
      description:
        "This application will provide a user the ability to journalize information about their travels such as description, start and end dates, city and country, activities, and cuisine as well as provide an opportunity to review/comment on other users' adventures. In addition, the most visited cities will be displayed via a map to help plan any future journeys. The web application uses Node.js and Express.js to create a RESTful API, Handlebars.js as a templating engine, MySQL and Sequelize ORM for the database, dotenv and bcrypt for securing sensitive data, bootstrap/CSS for styling, AWS S3 Bucket for storage, and Google Maps Geocoding and JavaScript APIs for mapping locations visited within a map view.",
    },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
  ]);
  const [currentProject, setCurrentProject] = useState(projects[0]);
    
      

      

      const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
      }

  return (
    <div>
      {isModalOpen && <Modal currentProject={currentProject}
                             onClose={toggleModal}/>}
       {/* <div className="flex-row">
           {currentProject.map((image, i) => (
               <img 
                src={require(`../../assets/images/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
               />
           ))}
       </div> */}
       <img src={require(`../../assets/images/${0}.png`)}
       alt={currentProject.name}
       onClick={() => toggleModal(currentProject, 0)}
       className="img-thumbnail mx-1"
       key={currentProject.name}
       />
    </div>
  )
}

export default ProjectList;