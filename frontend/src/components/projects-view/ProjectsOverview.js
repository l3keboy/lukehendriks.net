import React from 'react'
import ProjectOverviewBox from '../items/ProjectOverviewBox'

import lukehendriksnet_img from "../../images/projects/lukehendriks_net.png"
import husqy_img from "../../images/projects/husqy.png"
import nietveelbe_img from "../../images/projects/nietveel_be.png"
import victreebot_img from "../../images/projects/VictreeBot.png"

const ProjectsOverview = () => {
    return (
        <div id="projects" className="bg-light_primary text-light_secondary">
            <div id="projects-content" className="flex flex-col items-center m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="projects-content-title" className="font-gotham-rounded-bold text-center text-h1-small md:text-h1-large mt-12 md:mt-18 lg:mt-24">Projecten</label>
                <hr className="bg-light_accent w-60 md:w-172 lg:w-275 h-0.5 md:h-1 lg:h-1.5 mt-4 md:mt-6 lg:mt-8 mb-12 md:mb-6 lg:mb-4 rounded border-0 " />
                <div id="projects-content-preview-container">
                    <ProjectOverviewBox image={husqy_img} alt="https://husqy.xyz" title="Husqy"  github_link="" website_link="https://husqy.xyz"
                    description="Husqy is een veelzijdige Discord Bot geschreven in Python. De bot heeft verschillende functies, van welkomstberichten tot moderation en van muziek en radio tot aan reactie rollen. De bot maakt gebruik van de ‘slash commands’ van Discord en is naar wens in te stellen door verschillende bot specifieke commando’s."/>
                    <ProjectOverviewBox image={lukehendriksnet_img} alt="https://lukehendriks.net" title="Lukehendriks.net" github_link="https://github.com/l3keboy/lukehendriks.net" website_link="https://lukehendriks.net"
                    description="Lukehendriks.net, deze site, is een website geschreven met behulp van React.js. De site wordt gebruikt als persoonlijk portfolio voor mij!" />
                    <ProjectOverviewBox image={nietveelbe_img} alt="https://nietveel.be" title="Nietveel.be"  github_link="https://github.com/l3keboy/nietveel.be" website_link="https://nietveel.be"
                    description="Nietveel.be is een website geschreven met behulp van Laravel. Deze site is gebruikt om kennis te maken en ervaring op te doen met Laravel. Nietveel.be kent verschillende functionaliteiten, van reCAPTCHA V3 tot aan het versturen van een e-mail en van variabele tekst tot aan dark mode."/>
                    <ProjectOverviewBox image={victreebot_img} alt="VictreeBot" title="VictreeBot"  github_link="" website_link=""
                    description="VictreeBot is een Discord bot welke jou en je Pokémon GO community samen brengt. Met VictreeBot kunnen Raids gedeeld worden en kun je aangeven of je meehelpt. Ook kent VictreeBot server specifieke profielen voor gebruikers om bijvoorbeeld Friend Codes met elkaar te delen."/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsOverview
