import React from 'react'
import AboutOverview from '../components/about-view/AboutOverview'
import SkillsOverview from '../components/about-view/SkillsOverview'
import Footer from '../components/items/Footer'
import Header from '../components/items/Header'
import ScrollToTopHandler from '../components/ScrollToTopHandler';

const about = () => {
    return (
        <div id="lukehendriks.net-about" className="font-gotham-rounded-light bg-light_primary m-0 p-0">
            <section id="header-section">
                <Header />
            </section>
            <section id="about-section">
                <AboutOverview />
            </section>
            <section id="skills-section">
                <SkillsOverview />
            </section>
            <section id="footer-section">
                <Footer />
            </section>
            <ScrollToTopHandler />
        </div>
    )
}

export default about
