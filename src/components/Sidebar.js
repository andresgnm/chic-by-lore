import React from 'react'
import { FaTimes } from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'

export const Sidebar = ({isOpen, toggle}) => {


   
    return (
        <aside className='aside-container' id="as" style={
            (isOpen) ? 
                    {opacity:"100%", top:"0"}
                    : 
                    {opacity:"0", top:"-100%"}
        } onClick={toggle}>
        
        <div className='icon' onClick={toggle}>
        < FaTimes  className='close-icon' />
        </div>
        <div className='sidebarWrapper' >
            <ul className='sidebarMenu'>
                <LinkS className='sidebarLink' to='nosotros' onClick={toggle}>Nosotros</LinkS>
                <LinkS className='sidebarLink' to='servicios' onClick={toggle}>Servicios</LinkS>
                <LinkS className='sidebarLink' to='contacto' onClick={toggle}>Contacto</LinkS>
            </ul>
        </div>
    </aside>
    

  )
}
