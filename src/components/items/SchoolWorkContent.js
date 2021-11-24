import React from 'react'

const SchoolWorkContent = (props) => {
    let website_button
    if (props.link){
        website_button = <a href={props.link} rel="noreferrer" target="_blank" className="text-light_accent">Website &#x2197;</a>
    } else {
        website_button = <a href className="opacity-50 text-light_accent">Website &#x2197;</a>  
    }
    return (
        <div id="schoolwork" className="lg:flex text-body-small md:text-body-large mt-2 md:mt-5">
            <div id="schoolwork-overview" className="w-80 lg:text-right">
                <div id="schoolwork-name" className="font-gotham-rounded-mediumitalic text-h4-small md:text-h4-large">
                    {props.name}
                </div>
                <div id="schoolwork-date" className="font-gotham-rounded-light mb-2 text-body-small md:text-body-large">
                    {props.period}
                </div>
            </div>
            <div id="schoolwork-content" className="lg:w-175 lg:ml-20">
                <div id="schoolwork-content-title" className="">
                    <label className="font-gotham-rounded-mediumitalic text-h4-small md:text-h4-large">{props.function}</label><br />
                    {props.location}<br />
                    {website_button}<br /><br />
                </div>
                <div id="schoolwork-content-description" className="hidden md:flex">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default SchoolWorkContent
