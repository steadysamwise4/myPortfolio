import React from 'react';

function Modal({currentProject, onClose}) {
    const { name, description, index, owner} = currentProject;

    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h2 className="modalTitle">
              {name}
              <a href={`https://github.com/${owner}/${name}`}>
                  Github
              </a>
          </h2>
          <img alt={name} src={require(`../../assets/images/${index}.png`)} />
          <p>{description}</p>
          <button type="button" onClick={onClose}>Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;