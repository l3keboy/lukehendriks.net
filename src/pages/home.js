import React from 'react';
import AboutPreview from '../components/home-view/AboutPreview';
import ExperiencePreview from '../components/home-view/ExperiencePreview';
import Footer from '../components/items/Footer';
import Hero from '../components/home-view/Hero';
import ProjectsPreview from '../components/home-view/ProjectsPreview';
import ScrollToTopHandler from '../components/ScrollToTopHandler';

const Home = () => {
    return (
        <div id="lukehendriks.net-home" className="font-gotham-rounded-light bg-light_primary m-0 p-0">
            <section id="hero-section">
                <Hero />
            </section>
            <section id="about-section">
                <AboutPreview />
            </section>
            <section id="experience-section">
                <ExperiencePreview />
            </section>
            <section id="projects-section">
                <ProjectsPreview />
            </section>
            <section id="footer-section">
                <Footer />
            </section>
            <ScrollToTopHandler />
        </div>
    );
};

export default Home;