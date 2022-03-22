import React from 'react';
import gitHub from '../../assets/images/gitHub.png';
import linkedIn from '../../assets/images/linkedIn2.png';
import codeCademy from '../../assets/images/codeCademy.png';

const Footer = () => {
  return (
    <footer >
        <h6 className='text-center'>Thanks for visiting! Check out the links below.</h6>
        <p className='text-center'>davenportsam44@gmail.com</p>
        <div className="my-2 flex-row justify-center">
      <a  href='https://github.com/steadysamwise4' className='px-2'>
          <img src={gitHub} alt='github link' className='github-link mx-2'/>
      </a>
      <a  href='https://www.linkedin.com/in/davenportsam44/' className='px-2'>
          <img src={linkedIn} alt='linkedIn link' className='linkedIn-link mx-2'/>
      </a>
      <a  href='https://www.codecademy.com/profiles/steadysamwise4' className='px-2'>
          <img src={codeCademy} alt='codeCademy link' className='codeCademy-link mx-2'/>
      </a>

      </div>
    </footer>
  );
};

export default Footer;
