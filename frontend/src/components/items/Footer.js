import React from 'react'
import { Link, useHistory  } from 'react-router-dom'

const Footer = () => {
    const history = useHistory();
    return (
        <div id="footer">
            <div id="footer-wave"></div>
            <div id="footer-top" className="bg-light_secondary text-light_primary text-footer1-small lg:text-footer1-large">
                <div id="footer-top-content" className="max-w-content-small m-auto md:max-w-content-medium lg:max-w-content-large">
                    <div id="footer-top-content-logo" className="font-gotham-rounded-medium text-h3-small pt-8 block items-center text-center md:flex lg:text-h3-large"><Link to="/">Luke Hendriks</Link></div>
                    <div id="footer-top-content-links" className="block md:flex md:justify-between">
                        <div id="footer-top-content-links-socials" className="flex justify-center pb-4 md:pb-12">
                            <div id="footer-top-content-links-socials-mail" className="px-2 md:px-0 md:pr-5">
                                <Link to="/contact" className="hover:text-light_accent">Mail &#x2197;</Link>
                            </div> 
                            <div id="footer-top-content-links-socials-github" className="px-2 md:px-0 md:pr-5">
                                <a href="https://github.com/l3keboy" rel="noreferrer" target="_blank" className="hover:text-light_accent">GitHub &#x2197;</a>
                            </div> 
                            <div id="footer-top-content-links-socials-twitter" className="px-2 md:px-0 md:pr-5">
                                <a href="https://twitter.com/l3keboy" rel="noreferrer" target="_blank" className="hover:text-light_accent">Twitter &#x2197;</a>
                            </div> 
                            <div id="footer-top-content-links-socials-linkedin" className="px-2 md:px-0 md:pr-5">
                                <a href="https://linkedin.com/in/luke-h-421515225/" rel="noreferrer" target="_blank" className="hover:text-light_accent">LinkedIn &#x2197;</a>
                            </div> 
                        </div>
                        {/* <div id="footer-top-content-links-website" className="block items-center md:flex md:justify-between">
                            <div id="footer-top-content-links-website-about" className="w-36 pt-4 text-center m-auto md:pt-0 md:px-1 lg:w-44">
                                <p id="footer-top-content-links-website-about-title" className="font-gotham-rounded-book text-body-small lg:text-body-large">Over mij</p>
                                <p id="footer-top-content-links-website-about-description" className="pb-1">Kom meer over mij als persoon te weten.</p>
                                <button id="footer-about-read-more" onClick={()=> history.push('/over-mij')} className="border-light_accent border-2 rounded-xl px-4 py-1 hover:bg-light_accent">Meer</button>
                            </div>
                            <div id="footer-top-content-links-website-experience" className="w-36 pt-4 text-center m-auto md:pt-0 md:px-1 lg:w-44">
                                <p id="footer-top-content-links-website-experience-title" className="font-gotham-rounded-book text-body-small lg:text-body-large">Ervaring</p>
                                <p id="footer-top-content-links-website-experience-description" className="pb-1">Bekijk mijn werk en opleidingen.</p>
                                <button id="footer-experience-read-more" onClick={()=> history.push('/ervaring')} className="border-light_accent border-2 rounded-xl px-4 py-1 hover:bg-light_accent">Meer</button>
                            </div>
                            <div id="footer-top-content-links-website-projects" className="w-36 pt-4 text-center m-auto md:pt-0 md:px-1 lg:w-44">
                                <p id="footer-top-content-links-website-projects-title" className="font-gotham-rounded-book text-body-small lg:text-body-large">Projecten</p>
                                <p id="footer-top-content-links-website-projects-description" className="pb-1">Bekijk verschillende projecten van mij.</p>
                                <button id="footer-projects-read-more" onClick={()=> history.push('/projecten')} className="border-light_accent border-2 rounded-xl px-4 py-1 hover:bg-light_accent">Meer</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div id="footer-bottom" className="bg-light_secondary text-light_primary text-footer2-small lg:text-footer2-large">
                <div id="footer-bottom-content" className="font-gotham-rounded-medium max-w-content-small block items-center py-3 text-center m-auto h-12 md:max-w-content-medium md:flex md:py-0 md:justify-between md:m-auto lg:max-w-content-large">
                    <p id="footer-bottom-content-copyright">Luke Hendriks © 2021 :: Alle rechten voorbehouden</p>
                    <p id="footer-bottom-content-privacy-tos"><Link to="/privacy" className="hover:text-light_accent">Privacyverklaring</Link> &emsp;|&emsp; <Link to="/gebruiksvoorwaarden" className="hover:text-light_accent">Gebruiksvoorwaarden</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
