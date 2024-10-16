import React from 'react';
import './Header.css'

interface Toggle{
    toggleTheme:()=>void;
    theme:string;
  }
  
function Header({toggleTheme,theme}: Toggle){
  
return (<header className={`header ${theme}`}>
         <button className='headerButton' onClick={toggleTheme}>
              TOGGLETHEME
         </button>
        </header>
    )
  }
  export default Header;