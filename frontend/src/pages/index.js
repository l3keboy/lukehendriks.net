import React from 'react';
import { Route, Routes} from "react-router-dom";
import Home from './home';
import Contact from './contact';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Privacy from './privacy';
import TermsOfUse from './termsofuse';
import Error404 from './Error404';

const Webpages = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/over-mij" element={<About />} />
            <Route path = "/ervaring" element={<Experience />} />
            <Route path = "/projecten" element={<Projects />} />
            <Route path = "/privacy" element={<Privacy />} />
            <Route path = "/gebruiksvoorwaarden" element={<TermsOfUse />} />
            <Route path = "*" element={<Error404 />} />
        </Routes>
    );
};
export default Webpages;