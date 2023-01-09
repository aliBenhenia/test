import React from 'react'
import '../styles/Banner.scss'
import logo from "../assets/logo.png"
import Recommandation from './Recommandation';
export default function Banner() {
    const title = "ali ben";
   
  return (
    <div className='banner'>
            <img src={logo} alt='ali ben' className='logo'/>
            <h1 className='title'> {title}</h1>
       <div style={{
        marginLeft:"5%",
        display : "block"
       }}>
       <Recommandation />
       </div>
    </div>
  )
}
