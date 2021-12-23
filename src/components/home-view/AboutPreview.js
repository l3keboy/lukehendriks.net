import React from 'react'
import { useHistory  } from 'react-router-dom'
import Button from '../items/Button'

import profile_img from "../../images/Animoji.jpg"

const AboutPreview = () => {
    const history = useHistory();

    let today = new Date(),
    birth_date = new Date(`${8} ${18} ${2002}`),
    difference = today.getTime() - birth_date.getTime(),
    years = Math.floor(difference / 31556736000);

    return (
        <div id="about" className="content-center">
            <div id="about-content" className="flex flex-col items-center m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="about-content-title" className="z-10 font-gotham-rounded-bold text-center text-h1-small md:text-h1-large mt-20">Over mij</label>
                <hr className="z-10 bg-light_accent w-20 h-1.5 rounded border-0 mb-8 lg:mb-12" />
                <div id="about-content-me" className="text-center w-275 lg:flex lg:flex-row-reverse lg:text-left max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                    <div id="about-content-me-img-container" className="w-24 md:w-48 m-auto">
                        <img id="about-content-me-img" src={profile_img} alt="me" className="pb-2 rounded-full" />
                    </div>
                    <label id="about-content-me-info" className="font-gotham-rounded-light text-light_secondary text-body-small md:text-body-large w-200.5 pr-20">
                        <span className="font-gotham-rounded-book text-h4-small md:text-h4-large">Hi! Leuk je te ontmoeten!<br></br><br></br></span>
                        Ik ben Luke Hendriks, {years} jaar, student HBO-ICT aan Fontys Hogescholen in Tilburg. Buiten school ben ik werkzaam bij COOP Supermarkten. 
                         In mijn vrije tijd ben ik graag bezig met techniek, hierbij vind ik het erg leuk om mezelf bezig te houden met verschillende projecten in verschillende vormen en maten.
                    </label>
                </div>
            </div>
            <div id="about-content-button-container" className="flex max-w-content-small md:max-w-content-medium lg:max-w-content-large m-auto justify-center lg:justify-start mb-20">
                <Button id="about-read-more" on_click={()=> history.push('/over-mij')} border_color="border-light_secondary" content="Lees meer"/>
            </div>
        </div>
    )
}

export default AboutPreview
