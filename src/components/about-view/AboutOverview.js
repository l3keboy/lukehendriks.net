import React from 'react'
import { Link } from 'react-router-dom';

import profile_img from "../../images/Animoji.jpg"

const AboutOverview = () => {
    let today = new Date(),
    birth_date = new Date(`${8} ${18} ${2002}`),
    difference = today.getTime() - birth_date.getTime(),
    years = Math.floor(difference / 31556736000);

    return (
        <div id="about" className="bg-light_primary text-light_secondary">
            <div id="about-content" className="flex flex-col items-center m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="about-content-title" className="font-gotham-rounded-bold text-center text-h1-small md:text-h1-large mt-12 md:mt-18 lg:mt-24">Over mij</label>
                <hr className="bg-light_accent w-60 md:w-172 lg:w-275 h-0.5 md:h-1 lg:h-1.5 mt-4 md:mt-6 lg:mt-8 mb-12 md:mb-6 lg:mb-4 rounded border-0 " />
                <div id="about-content-preview-container">
                    <div id="about-content-me" className="text-center w-275 lg:flex lg:flex-row-reverse lg:text-left max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                        <div id="about-content-me-img-container" className="w-24 md:w-56 m-auto md:mx-auto md:my-0">
                            <img id="about-content-me-img" src={profile_img} alt="me" className="pb-2 rounded-full" />
                        </div>
                        <label id="about-content-me-info" className="font-gotham-rounded-light text-light_secondary text-body-small md:text-body-large w-200.5 pr-20">
                            <span className="font-gotham-rounded-book text-h4-small md:text-h4-large">Hi! Leuk je te ontmoeten!<br></br><br></br></span>
                            Ik ben Luke Hendriks, {years} jaar, student HBO-ICT aan Fontys Hogescholen in Tilburg. Buiten school ben ik werkzaam bij COOP Supermarkten. 
                             In mijn vrije tijd ben ik graag bezig met techniek, hierbij vind ik het erg leuk om mezelf bezig te houden met verschillende projecten in verschillende vormen en maten.
                            <br /><br />
                            Een aantal voorbeelden van projecten zijn: Husqy (een Discord Bot geschreven in Python), Nietveel.be (een website ter oriëntatie op Laravel) en Lukehendriks.net (deze website geschreven in React).
                             Ik heb hier met veel plezier aan gewerkt en sommige van deze projecten lopen nog steeds. Voor meer over deze projecten, zie {<Link className="text-light_accent" to="/projecten">/Projecten</Link>}.
                            <br /><br />
                            Mocht je contact met me op willen nemen dan kan dit via: {<a href="https://github.com/l3keboy" rel="noreferrer" target="_blank">GitHub &#x2197;</a>}, {<a href="https://twitter.com/l3keboy" rel="noreferrer" target="_blank">Twitter &#x2197;</a>} of {<a href="https://linkedin.com/in/luke-h-421515225/" rel="noreferrer" target="_blank">LinkedIn &#x2197;</a>}.              
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOverview
