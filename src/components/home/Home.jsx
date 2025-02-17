import React from 'react'
import MainHeader from '../layout/MainHeader'
import HotelService from '../common/HotelService'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'

const Home = () => {
    return (
      <section>
        <MainHeader /> 
        <section className='container'>
          <RoomCarousel/>
          <Parallax/>
          <HotelService />
          <RoomCarousel/>
        </section>
      </section>
    )
}

export default Home