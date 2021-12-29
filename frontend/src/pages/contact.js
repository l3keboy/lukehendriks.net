import React from 'react'
import ContactForm from '../components/contact-view/ContactForm';
import Footer from '../components/items/Footer'
import Header from '../components/items/Header'
import ScrollToTopHandler from '../components/ScrollToTopHandler';

const contact = () => {
    return (
        <div id="lukehendriks.net-contact" className="font-gotham-rounded-light bg-light_primary m-0 p-0">
            <section id="header-section">
                <Header />
            </section>
            <section id="contact-section">
                <ContactForm />
            </section>
            <section id="footer-section">
                <Footer />
            </section>
            <ScrollToTopHandler />
        </div>
    )
}

export default contact