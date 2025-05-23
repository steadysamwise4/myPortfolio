import React from 'react';

function Modal({ currentProject, onClose }) {
  const { name, description, index, owner, url } = currentProject;

  return (
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h2 className='modalTitle flex-row justify-space-around'>
          {name}
          {owner && (
            <a
              href={`https://github.com/${owner}/${name}`}
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          )}

          {url && (
            <a href={url} target='_blank' rel='noreferrer'>
              See it deployed!
            </a>
          )}
        </h2>
        <img alt={name} src={require(`../../assets/images/${index}.png`)} />
        <p>{description}</p>
        <button type='button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
