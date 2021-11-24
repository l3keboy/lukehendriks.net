import React from 'react'

const SkillsBox = (props) => {
    let box
    if (props.skill_number === 1) {
        box = <div id="skills" className="text-body-small md:text-body-large bg-gray-300 flex w-60 md:w-80 lg:w-128 h-8 md:h-11 lg:h-14 mt-2">
                <div id="skills-title-box" className="font-gotham-rounded-medium bg-light_accent w-20 md:w-28 lg:w-36 flex">
                    <div id="skills-title" className="m-auto">{props.skills_title}</div>
                </div>
                <div id="skills-skilled-box" className="bg-red-400 font-gotham-rounded-bookitalic flex flex-end w-40 md:w-52 lg:w-96">
                    <div id="skills-skilled" className="ml-auto my-auto pr-1">Uhm...</div>
                </div>            
              </div>
    } else if (props.skill_number === 2) {
        box = <div id="skills" className="text-body-small md:text-body-large bg-gray-300 flex w-60 md:w-80 lg:w-128 h-8 md:h-11 lg:h-14 mt-2">
                <div id="skills-title-box" className="font-gotham-rounded-medium bg-light_accent w-20 md:w-28 lg:w-36 flex">
                    <div id="skills-title" className="m-auto">{props.skills_title}</div>
                </div>
                <div id="skills-skilled-box" className="bg-yellow-500 font-gotham-rounded-bookitalic flex flex-end w-40 md:w-52 lg:w-96">
                    <div id="skills-skilled" className="ml-auto my-auto pr-1">Beginner</div>
                </div>            
              </div>
    } else if (props.skill_number === 3) {
        box = <div id="skills" className="text-body-small md:text-body-large bg-gray-300 flex w-60 md:w-80 lg:w-128 h-8 md:h-11 lg:h-14 mt-2">
                <div id="skills-title-box" className="font-gotham-rounded-medium bg-light_accent w-20 md:w-28 lg:w-36 flex">
                    <div id="skills-title" className="m-auto">{props.skills_title}</div>
                </div>
                <div id="skills-skilled-box" className="bg-yellow-300 font-gotham-rounded-bookitalic flex flex-end w-40 md:w-52 lg:w-96">
                    <div id="skills-skilled" className="ml-auto my-auto pr-1">Gemiddeld</div>
                </div>            
              </div>
    } else if (props.skill_number === 4) {
        box = <div id="skills" className="text-body-small md:text-body-large bg-gray-300 flex w-60 md:w-80 lg:w-128 h-8 md:h-11 lg:h-14 mt-2">
                <div id="skills-title-box" className="font-gotham-rounded-medium bg-light_accent w-20 md:w-28 lg:w-36 flex">
                    <div id="skills-title" className="m-auto">{props.skills_title}</div>
                </div>
                <div id="skills-skilled-box" className="bg-green-500 font-gotham-rounded-bookitalic flex flex-end w-40 md:w-52 lg:w-96">
                    <div id="skills-skilled" className="ml-auto my-auto pr-1">Geavanceerd</div>
                </div>            
              </div>
    } else {
        box = <div id="skills" className="text-body-small md:text-body-large bg-gray-300 flex w-60 md:w-80 lg:w-128 h-8 md:h-11 lg:h-14 mt-2">
                <div id="skills-title-box" className="font-gotham-rounded-medium bg-light_accent w-20 md:w-28 lg:w-36 flex">
                    <div id="skills-title" className="m-auto">{props.skills_title}</div>
                </div>
                <div id="skills-skilled-box" className="font-gotham-rounded-bookitalic flex flex-end w-40 md:w-52 lg:w-96">
                    <div id="skills-skilled" className="ml-auto my-auto pr-1">Volgt later!</div>
                </div>            
              </div>
    }
    return box
}

export default SkillsBox
