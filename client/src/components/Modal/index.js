import React from 'react';

function Modal({currentProject, onClose}) {
    const { name, description, index} = currentProject;

    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img alt={name} src={require(`../../assets/images/${index}.jpg`)} />
          <p>{description}</p>
          <button type="button" onClick={onClose}>Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;