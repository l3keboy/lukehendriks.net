import React from 'react'

const ProjectOverviewBox = (props) => {
    let github_button
    let website_button

    if (props.github_link){
        github_button = <a href={props.github_link}><button id="github-button" className="border-light_accent text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1 hover:bg-light_accent hover:text-light_primary">GitHub</button></a>
    } else {
        github_button = <a href className="opacity-50"><button id="github-button-disabled" className="border-light_accent text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1 hover:cursor-not-allowed">GitHub</button></a>  
    }

    if (props.website_link){
        website_button = <a href={props.website_link}><button id="website-button" className="border-light_secondary text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1 hover:bg-light_secondary hover:text-light_primary">Website</button></a>
    } else {
        website_button = <a href className="opacity-50"><button id="website-button-disabled" className="border-light_secondary text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1 hover:cursor-not-allowed">Website</button></a>  
    }

    return (
        <div id="project-overview" className="shadow-2xl mb-12 lg:mb-8">
            <div id="project-overview-content" className="flex flex-col items-center max-w-content-small md:max-w-content-small/medium lg:max-w-content-large lg:items-stretch m-auto lg:flex-row">
                <div id="project-preview-cotainer-img" className="w-60 md:w-88">
                    <img src={props.image} alt={props.alt}></img>
                </div>
                <div id="project-preview-cotainer-description" className="relative lg:w-192 p-4 text-body-small md:text-body-large">
                    <div id="project-overview-container-description-text-container" className="max-h-56 md:max-h-76 lg:max-h-28 overflow-scroll overflow-x-hidden">
                        <label className="font-gotham-rounded-mediumitalic text-h4-small md:text-h4-large">{props.title}</label><br></br>
                        {props.description}
                    </div>
                    <div id="project-overview-container-description-buttons-container" className="flex lg:mb-4 justify-evenly lg:absolute lg:bottom-0">
                        {github_button}
                        <div id="project-overview-container-description-buttons-splittern" className="lg:mx-2"></div>
                        {website_button}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectOverviewBox
