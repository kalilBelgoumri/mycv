import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import img from '../assets/Logo.png'
import { useState, useEffect } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

function Header() {
  const [show, setshow] = useState(true)
  const [open, setOpen] = useState(false)
  const controlNavbar = () => {
    window.scrollY < 200 ? setshow(true) : setshow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  return (
    <div className="flex flex-col">
      <div className="backgound flex flex-col"></div>
      <header
        className={`header flex h-32 w-full items-center justify-end bg-gradient-to-b from-gray-700 via-gray-900 to-black transition 
    ${show && 'header__prop'}`}
      >
        {/* ** Navbar Burger Menu ** */}
        <div className="hamurgerOpen absolute right-0 flex cursor-pointer items-center justify-end pr-6 sm:hidden ">
          <Hamburger color="white" rounded toggled={open} toggle={setOpen} />
        </div>
        <div className="logo__Nav absolute left-0 mx-6 -mt-3">
          <img className="h-1/2" src={img} alt="Logo" />
        </div>
        <div
          className={`"hamburgerOpen cursor-pointer" hidden items-center justify-end sm:flex
        ${show && 'hamburgerOpen'}`}
        >
          <Navigation />
        </div>
        <div className="mobileNavigatio flex items-center justify-center pr-12 transition sm:hidden ">
          {open && <MobileNavigation />}
        </div>
      </header>
    </div>
  )
}

export default Header
