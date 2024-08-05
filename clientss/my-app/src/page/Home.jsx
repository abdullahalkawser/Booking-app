import React from 'react'
import Baner from './banner/banner'
import CarCity from './carCity/carCity'
import CarTpye from './carType/cartype'
import GustCar from './gustcarLove/GustCar'
import Subscrib from './subdcribe'
import Navber from '../page/navber/navber'



const Home = () => {
  return (
    <div>
      <Navber></Navber>
        <Baner></Baner>

     
     
        <CarCity></CarCity>
        <CarTpye></CarTpye>
        
        <GustCar></GustCar>
        <Subscrib></Subscrib>
    </div>
  )
}

export default Home