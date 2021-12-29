import React from 'react'
import { Link, useHistory  } from 'react-router-dom'

import hamburger from "../../images/hamburger.png"

const Header = () => {
    const history = useHistory();

    return (
        <div id="header" className="max-w-content-small md:max-w-content-medium lg:max-w-content-large m-auto">
            <header id="header-content" className="font-gotham-rounded-medium flex justify-between max-w-content-small md:max-w-content-medium lg:max-w-content-large m-auto">
                <div id="header-content-title/logo-container" className="w-28 leading-6 py-5">
                    <label id="header-content-title/logo" className="text-h3-small lg:text-h3-large"><Link to="/">Luke Hendriks</Link></label>
                </div>
                <nav id="header-content-nav" className="text-h4-small lg:text-h4-large my-auto">
                    <li id="header-content-nav-link" className="hidden md:inline-block pr-12"><Link to="/over-mij" className="hover:text-light_accent">Over mij</Link></li>
                    <li id="header-content-nav-link" className="hidden md:inline-block pr-12"><Link to="/ervaring" className="hover:text-light_accent">Ervaring</Link></li>
                    <li id="header-content-nav-link" className="hidden md:inline-block pr-12"><Link to="/projecten" className="hover:text-light_accent">Projecten</Link></li>
                    <button id="header-content-nav-button" onClick={()=> history.push('/contact')} className="hidden md:inline-block border-light_accent text-body-small md:text-body-large border-2 rounded-xl px-4 py-1 hover:bg-light_accent hover:text-light_primary">Contact</button>
                </nav>
                <nav id="header-content-hamburger-nav-button" className="md:hidden text-h4-small lg:text-h4-large my-auto">
                    <img onClick={()=> document.getElementById("header-content-hamburger-nav-items").classList.toggle("hidden")} alt="hamburger" width="20" height="20" src={hamburger}></img>
                </nav>
            </header>
            <div id="header-content-hamburger-nav-items" className="hidden md:flex font-gotham-rounded-book text-h4-small lg:text-h4-large">
                <div className="flex flex-col md:hidden items-start text-h4-small lg:text-h4-large">
                    <li id="header-content-nav-link" className="flex md:hidden mx-auto my-0.5 "><Link to="/over-mij">Over mij</Link></li>
                    <hr className="bg-light_accent w-12 mx-auto my-0.5 h-0.5 rounded border-0 " />
                    <li id="header-content-nav-link" className="flex md:hidden mx-auto my-0.5"><Link to="/ervaring">Ervaring</Link></li>
                    <hr className="bg-light_accent w-12 mx-auto my-0.5 h-0.5 rounded border-0 " />
                    <li id="header-content-nav-link" className="flex md:hidden mx-auto my-0.5"><Link to="/projecten">Projecten</Link></li>
                </div>
            </div>
        </div>
    )
}

export default Header
