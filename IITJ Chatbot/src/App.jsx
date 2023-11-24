import React from 'react'
import { ReactDOM } from 'react'
import Navbar from "./Navbar"
import MainContent from './MainContent'
import Footer from './footer'
export default function(){

    return(
      <div className='App-Container'>
        <Navbar/>
        <MainContent/>
        <Footer/>
        {/* <h1>Hello World!</h1> */}
      </div>
    )
}





