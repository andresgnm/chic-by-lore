import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';




const Navbar = ({toggle}) => {
  return (
    <>
      <nav className='nav'>
        <Link className='navLink' to="/">
           <img src={require('../images/chic_logo1.PNG') } style={{maxWidth: '30%'}} alt='e'/> 
           <h5 style={{color: '#e3dbd3'}}>Chic by Lore</h5>
          
        </Link>
        <FaBars className='Bars' onClick={toggle}/>
        <div className='NavMenu'>
          <Link className='navLink' to="/nosotros" >
            Nosotros
          </Link>
          <Link className='navLink' to="/servicios" >
            Servicios
          </Link>
          <Link className='navLink' to="/Contacto" >
            Contacto
          </Link>
          
        </div>
        
      </nav>
    </>
  )
}

export default Navbar