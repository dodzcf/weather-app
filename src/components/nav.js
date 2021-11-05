import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './nav.css';

const Navbar=()=>
{


    const RenderMenu=()=>
    {
    
    
    return(
      <>
      
        <li class="nav-item">
          <Link class="nav-link" to="/aboutme">About Me</Link>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/" >Home</NavLink>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/webinfo">About Website</Link>
        </li>
      </>
    )
  
    }
  
    return(
      <>
      
  <nav class="navbar navbar-expand-lg col ">
    <button class="navbar-toggler btn btn-success" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
      <RenderMenu/>
      </ul>
    </div>
  </nav>

  
  </>
    )
  
  
}

export default Navbar;