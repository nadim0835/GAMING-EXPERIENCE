import React from 'react'
import Navber from './components/navber/Navber'
import Banner from './components/banner/Banner'
import About from './components/About/About'
import Populer from './components/Populer/Populer'
import Live from './components/Populer/Live/Live'

const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <About/>
    <Populer/>
    <Live/>
    </>
  )
}

export default Home