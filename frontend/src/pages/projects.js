import React from 'react'
import Footer from '../components/items/Footer'
import Header from '../components/items/Header'
import ProjectsOverview from '../components/projects-view/ProjectsOverview'
import ScrollToTopHandler from '../components/ScrollToTopHandler';

const projects = () => {
    return (
        <div id="lukehendriks.net-projects" className="font-gotham-rounded-light bg-light_primary m-0 p-0">
            <section id="header-section">
                <Header />
            </section>
            <section id="projects-section">
                <ProjectsOverview />
            </section>
            <section id="footer-section">
                <Footer />
            </section>
            <ScrollToTopHandler />
        </div>
    )
}

export default projects
