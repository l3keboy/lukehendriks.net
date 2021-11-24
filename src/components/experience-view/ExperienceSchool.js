import React from 'react'
import SchoolWorkContent from '../items/SchoolWorkContent'

const ExperienceSchool = () => {
    return (
        <div id="school" className="bg-light_primary text-light_secondary">
            <div id="school-content" className="flex flex-col m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="school-content-title" className="font-gotham-rounded-bold text-center text-h1-small md:text-h1-large mt-12 md:mt-18 lg:mt-24">Ervaring</label>
                <hr className="bg-light_accent w-60 md:w-172 lg:w-275 h-0.5 md:h-1 lg:h-1.5 mt-4 md:mt-6 lg:mt-8 mb-12 md:mb-10 rounded border-0" />
                <label id="school-content-title" className="font-gotham-rounded-book text-h3-small md:text-h3-large">Opleidingen</label>
                <SchoolWorkContent name="Fontys Hogescholen" period="09/2019 - Heden" function="HBO-ICT – ICT & Infrastructuur, ICT & Cyber Security" location="Fontys Hogeschool ICT – Tilburg, Noord-Brabant, 5022 DM" link="https://www.fontys.nl/"
                                    description="Ik volg momenteel de opleiding HBO-ICT aan Fontys Hogescholen. Voor de hoofdrichting heb ik gekozen voor ICT & Infrastructuur en voor de specialisatie heb ik gekozen voor Cyber Security.
                                    De opleiding is demand based en ik kan me dus met veel verschillende zaken bezighouden. Een aantal voorbeelden van zaken waar ik mee gewerkt heb tijdens de opleiding zijn: 
                                    Windows en Linux, Ansible, Kubernetes, PRTG, Zabbix, 3CX, ELK Stack, en nog meer! " />
                <SchoolWorkContent name="2College Cobbenhagenlyceum" period="09/2014 - 06/2019" function="HAVO – Natuur en Techniek" location="2College Cobbenhagenlyceum – Tilburg, Noord-Brabant, 5012 AE" link="https://www.2college.nl/cobbenhagenlyceum/school/"
                                    description="Voor de opleiding HBO-ICT heb ik de HAVO met het profiel Natuur en Techniek gevolgd aan het 2College Cobbenhagenlyceum in Tilburg. Op deze school heb ik ook het vak Onderzoeken en Ontwerpen (O&O in het kort)
                                     gevolgd. De vakken die ik gevolgd heb zijn: Nederlands, Engels, Wiskunde, Natuurkunde, Scheikunde, Management en Organisatie, CKV, Maatschappijleer, Levensbeschouwing en O&O" />
            </div>
        </div>
    )
}

export default ExperienceSchool
