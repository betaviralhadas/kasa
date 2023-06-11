import React from 'react'
import Logo from "../img/LogoKasa.png"
import '../style/layout/_Footer.scss'

const Footer = () => {
  return (
    <footer>
        <img className='imgFooter' src= {Logo} alt="Logo"></img>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer

/* importei o logo 
criei uma funcao onde tem a img do logo e 1tag com o texto 
e exporto no fim */
