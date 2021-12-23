import React from 'react'
import { scroller } from 'react-scroll'
import Typing from 'react-typing-animation';

const Hero = () => {
    const scrollToSection = () => {
        scroller.scrollTo("about", {
            duration: 800,
            delay: 0,
            smooth: "easyInOutQuart",
        })
    }

    return (
        <div id="hero" className="z-0 bg-light_secondary flex flex-col items-center h-screen w-screen">
            <div className="absolute top-0 left-0 h-screen w-screen">
                <canvas height="100vh" width="100vw" className="h-screen w-screen"></canvas>
            </div>
            <div id="hero-welcome" className="z-10 flex flex-col md:w-172 lg:w-175 justify-center text-center max-w-content-small md:max-w-content-medium lg:max-w-content-large m-auto">
                <div id="hero-welcome-text" className="z-10 md:w-172 lg:w-175 text-light_primary">
                    <Typing speed={50}>
                        <label className="z-10 font-gotham-rounded-light text-h2-small md:text-h2-large"><span className="z-10 font-gotham-rounded-medium text-h1-small md:text-h1-large">Hi! Ik ben <span className="text-light_accent">Luke Hendriks</span>!<Typing.Delay ms={250} /></span><br></br>Student ICT & Infrastructuur, met programeer ervaring!</label>
                    </Typing>  
                </div>
                <div id="hero-welcome-button-container" className="z-10">
                    <button id="home-scroll-button" onClick={scrollToSection} className="border-light_accent text-light_primary text-h3-small mt-4 md:text-h3-large border-4 rounded-xl px-4 py-1">Scroll verder</button>
                </div>
            </div>
            <div className="w-60 md:w-210 lg:w-275 h-4 md:h-8 bg-light_primary shadow-3xl transform translate-y-2 md:translate-y-4"></div>
        </div>
    )
}

export default Hero
