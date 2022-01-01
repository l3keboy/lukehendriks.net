import React from 'react'
import ProjectPreviewBox from '../items/ProjectPreviewBox'

import lukehendriksnet_img from "../../images/projects/lukehendriks_net.png"
import husqy_img from "../../images/projects/husqy.png"
import nietveelbe_img from "../../images/projects/nietveel_be.png"

const ProjectsPreview = () => {
    return (
        <div id="projects" className="bg-light_primary text-light_secondary">
            <div id="projects-content" className="flex flex-col items-center m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="projects-content-title" className="font-gotham-rounded-bold text-center text-h1-small md:text-h1-large mt-20">Uitgelichte projecten</label>
                <hr className="bg-light_accent w-20 h-1.5 rounded border-0 mb-8 lg:mb-12" />
                <div id="projects-content-preview-container" className="flex flex-col lg:flex-row md:flex-wrap">
                    <ProjectPreviewBox image={lukehendriksnet_img} alt="https://lukehendriks.net" name="Lukehendriks.net" description="Deze website" language="React.js" description_extra="Portfolio website geschreven met behulp van " />
                    <ProjectPreviewBox image={husqy_img} alt="https://husqy.xyz" name="Husqy" description="Discord Bot" language="Python" description_extra="Discord bot met verschillende functies waaronder: muziek, radio en reactierollen. Deze bot is geschreven in " />
                    <ProjectPreviewBox image={nietveelbe_img} alt="https://nietveel.be" name="Nietveel.be" description="Website" language="Laravel" description_extra="Website om ervaring op te doen met " />
                </div>
            </div>
        </div>
    )
}

export default ProjectsPreview
