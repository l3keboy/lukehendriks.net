import React from 'react'
import ScrollToTopHandler from '../components/ScrollToTopHandler';
import Footer from '../components/items/Footer'
import Header from '../components/items/Header'
import TermsOfUseOverview from '../components/privacy-tos-view/TermsOfUseOverview';

const termsofuse = () => {
    return (
        <div id="lukehendriks.net-experience" className="font-gotham-rounded-light bg-light_primary m-0 p-0">
            <section id="header-section">
                <Header />
            </section>
            <section id="terms-of-use-section">
                <TermsOfUseOverview />
            </section>
            <section id="footer-section">
                <Footer />
            </section>
            <ScrollToTopHandler />
        </div>
    )
}

export default termsofuse
