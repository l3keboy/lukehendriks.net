import React from 'react'
import SkillsBox from '../items/SkillsBox'

const SkillsOverview = () => {
    return (
        <div id="skills" className="bg-light_primary text-light_secondary">
            <div id="skills-content" className="flex flex-col m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="skills-content-title" className="text-center font-gotham-rounded-bold text-h1-small md:text-h1-large mt-12 md:mt-18 lg:mt-24">Skills</label>
                <label id="skills-content-subtitle" className="text-center font-gotham-rounded-light text-body-small md:text-body-large">Ugm..., Beginner, Gemiddeld, Geavanceerd</label>
                <hr className="bg-light_accent w-60 md:w-172 lg:w-275 h-0.5 md:h-1 lg:h-1.5 mt-4 md:mt-6 lg:mt-8 mb-12 md:mb-10 rounded border-0 " />
                <label id="skills-content-1-title" className="font-gotham-rounded-book text-h3-small md:text-h3-large">Programmeren</label>
                <div id="skills-content-1-preview-container" className="md:flex md:flex-wrap md:justify-between m-auto md:w-172 lg:w-275">
                    <SkillsBox skill_number={4} skills_title="Python" />
                    <SkillsBox skill_number={3} skills_title="PowerShell" />
                    <SkillsBox skill_number={3} skills_title="React.js" />
                    <SkillsBox skill_number={3} skills_title="Tailwind CSS" />
                    <SkillsBox skill_number={2} skills_title="Laravel" />
                    <SkillsBox skill_number={2} skills_title="PHP" />
                    <SkillsBox skill_number={2} skills_title="HTML & CSS" />
                    <SkillsBox skill_number={1} skills_title="C++" />
                    <SkillsBox skill_number={1} skills_title="C#" />
                </div>
                <label id="skills-content-3-title" className="font-gotham-rounded-book text-h3-small md:text-h3-large mt-6 md:mt-6 lg:mt-12">Talen</label>
                <div id="skills-content-3-preview-container" className="md:flex md:flex-wrap md:justify-between m-auto md:w-172 lg:w-275">
                    <SkillsBox skill_number={4} skills_title="Nederlands" />
                    <SkillsBox skill_number={4} skills_title="Engels" />
                </div>
                <label id="skills-content-4-title" className="font-gotham-rounded-book text-h3-small md:text-h3-large mt-6 md:mt-6 lg:mt-12">Overige</label>
                <div id="skills-content-4-preview-container" className="md:flex md:flex-wrap md:justify-between m-auto md:w-172 lg:w-275">
                    <SkillsBox skill_number={4} skills_title="MS Office" />
                    <SkillsBox skill_number={4} skills_title="VScode" />
                    <SkillsBox skill_number={4} skills_title="Sublime Text" />
                    <SkillsBox skill_number={4} skills_title="Notepad++" />
                    <SkillsBox skill_number={3} skills_title="GitHub" />
                    <SkillsBox skill_number={3} skills_title="Figma" />
                    <SkillsBox skill_number={3} skills_title="Adobe XD" />
                </div>
            </div>
        </div>
    )
}

export default SkillsOverview
