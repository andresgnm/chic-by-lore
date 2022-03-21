import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Principal } from '../components/Principal';
import { Sidebar } from '../components/Sidebar'
import { Nosotros } from './Nosotros';

export const Inicio = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar isOpen={ isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Principal />
    <Nosotros />
    
    </>
  )
}
