import React from 'react'
import ScrollToTopHandler from '../components/ScrollToTopHandler';
import Footer from '../components/items/Footer'
import Header from '../components/items/Header'
import ExperienceSchool from '../components/experience-view/ExperienceSchool';
import ExperienceWork from '../components/experience-view/ExperienceWork';

const experience = () => {
    return (
        <div id="lukehendriks.net-experience" className="font-gotham-rounded-light bg-light_primary m-0 p-0">
            <section id="header-section">
                <Header />
            </section>
            <section id="experience-school-section">
                <ExperienceSchool />
            </section>
            <section id="experience-work-section">
                <ExperienceWork />
            </section>
            <section id="footer-section">
                <Footer />
            </section>
            <ScrollToTopHandler />
        </div>
    )
}

export default experience
