import React from 'react'
import heroBG from '../assets/heroBg.jpg'

const MainHero = () => {
  return (
    <main className='hero-section relative'>
        <img src={heroBG} alt="" className="hero-bg-img" width={"100%"}/>
        <div className='hero-caption absolute top-1/2 text-white font-bold'>
            <h1 className='text-4xl'>Welcome to Anime Spectra</h1>
            <p>Thousands of anime, manga and characters to discover. Explore now.</p>
        </div>
    </main>
  )
}

export default MainHero