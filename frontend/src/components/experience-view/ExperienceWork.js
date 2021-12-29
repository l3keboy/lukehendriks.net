import React from 'react'
import SchoolWorkContent from '../items/SchoolWorkContent'

const ExperienceWork = () => {
    return (
        <div id="school" className="bg-light_primary text-light_secondary">
            <div id="school-content" className="flex flex-col m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="school-content-title" className="font-gotham-rounded-book text-h3-small md:text-h3-large mt-5 md:mt-10">Werk</label>
                <SchoolWorkContent name="Coop Supermarkten" period="12/2017 - Heden" function="Vulploegmedewerker" location="Coop Supermarkten, Tilburg, Noord-Brabant, 5014 HG" link="https://www.coop.nl/"
                                    description="Ik werk sinds december 2017 bij de COOP. Hier is mijn primaire taak vakkenvullen, daarnaast ben ik inzetbaar op verschillende afdelen en heb ik verschillende andere taken welke ik, gedurende de dagen die ik werk, op me neem." />
                <SchoolWorkContent name="Isah B.V." period="09/2021 - 01/2022" function="Stagair" location="Isah B.V., Tilburg, Noord-Brabant, 5026 SP" link="https://isah.com/"
                                    description="Voor de opleiding HBO-ICT aan Fontys Hogescholen heb ik stage gelopen bij Isah B.V, een bedrijf gespecialiseerd in ERP Software voor de maakindustrie. Ik heb voor Isah B.V. een hele leuke en uitdagende opdracht mogen doen: De stageopdracht omvat: Het herinrichten/vernieuwen van de infrastructuur monitoring, afgestemd op de wensen/behoeften van Isah B.V. Gedurende de stageperiode heb ik het erg naar mijn 
                                     zin gehad en erg veel geleerd, zowel met betrekking op de techniek als op de professionele vaardigheden (zoals onderzoeken, documentatie en communicatie)." />
            </div>
        </div>
    )
}

export default ExperienceWork
