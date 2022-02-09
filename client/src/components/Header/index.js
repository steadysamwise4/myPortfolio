import React from 'react';
import stonehenge from "../../assets/images/stonehenge.png"
const Header = () => {
    
  
    return (
      <header className=" App-header mb-4 py-2 flex-row align-center">
          <div>
            <h1>Sam Davenport</h1>
          </div>
            <img src={stonehenge} alt="stone henge"/>
        <div className="container flex-row justify-space-between-lg justify-center align-center">
  
          
           
              
                <div>About</div>
                <div>Projects</div>
              
           
              
                <div>Resume</div>
                <div>Contact</div>
              
            
          
        </div>
      </header>
    );
  };
  
  export default Header;
  