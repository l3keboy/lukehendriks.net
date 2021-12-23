import React from 'react'
import { useHistory  } from 'react-router-dom'
import Button from '../items/Button'

import fontys_img from '../../images/experience/fontys.png'
import isah_img from "../../images/experience/isah.png"

const ExperiencePreview = () => {
    const history = useHistory();
    return (
        <div id="experience">
            <div id="experience-content" className="bg-light_secondary text-light_primary text-center  flex flex-col items-center">
                <label id="experience-content-title" className="z-10 font-gotham-rounded-bold text-center text-h1-small md:text-h1-large mt-20">Ervaring</label>
                <hr className="z-10 bg-light_accent w-20 h-1.5 rounded border-0 mb-8 lg:mb-12" />
                <div id="experience-content-items">
                    <div id="experience-content-items-subtitle" className="pb-4 md:pb-8 lg:flex">
                        <label id="z-10 experience-content-items-subtitle-text" className="z-10 font-gotham-rounded-book text-center text-h3-small md:text-h3-large">Vorige opleiding</label>
                    </div>
                    <div id="experience-content-items-education" className="z-10 flex flex-col w-60 md:w-96 lg:flex-row lg:w-275 justify-center ">
                        <div id="experience-content-items-education-preview" className="z-10 w-24 md:w-48 m-auto">
                            <img id="experience-content-items-education-preview-img" src={fontys_img} alt="vorige-opleiding" className="z-10 rounded-full" />
                        </div>
                        <div id="experience-content-items-education-preview-description" className="z-10 pt-2 text-left text-body-small md:text-body-large lg:w-210">
                                <label id="experience-content-items-education-preview-description-title" className="z-10"><span className="font-gotham-rounded-bookitalic">Opleiding:</span> HBO-ICT<br></br><span className="font-gotham-rounded-bookitalic">Locatie:</span> Professor Goossenslaan 1, 5022 DM Tilburg<br></br><br></br></label>
                                <label id="experience-content-items-education-preview-description-rest" className="z-10">
                                Ik volg momenteel de opleiding HBO-ICT aan Fontys Hogescholen. Voor de hoofdrichting heb ik gekozen voor ICT & Infrastructuur en voor de specialisatie heb ik gekozen voor Cyber Security.
                                De opleiding is demand based en ik kan me dus met veel verschillende zaken bezighouden. Een aantal voorbeelden van zaken waar ik mee gewerkt heb tijdens de opleiding zijn: 
                                <label className="font-gotham-rounded-bolditalic"> Windows en Linux</label>, <label className="font-gotham-rounded-bolditalic"> Ansible</label>, <label className="font-gotham-rounded-bolditalic"> Kubernetes</label>, <label className="font-gotham-rounded-bolditalic"> PRTG</label>, <label className="font-gotham-rounded-bolditalic"> Zabbix</label>, <label className="font-gotham-rounded-bolditalic"> 3CX</label>, <label className="font-gotham-rounded-bolditalic"> ELK Stack</label>, en nog meer!  
                                </label>
                        </div>
                    </div>
                    <div id="experience-content-items-button" className="z-10 mb-12 lg:flex">
                        <Button id="experience-school-read-more" on_click={()=> history.push('/ervaring')} border_color="border-light_primary" content="Lees meer"/>
                    </div>                    
                    <div id="experience-content-items-subtitle" className="pb-4 md:pb-8 lg:flex">
                        <label id="experience-content-items-subtitle-text" className="z-10 font-gotham-rounded-book text-center pb-4 md:pb-8 text-h3-small md:text-h3-large">Vorige werkgever</label>
                    </div>
                    <div id="experience-content-items-work" className="flex flex-col w-60 md:w-96 lg:flex-row lg:w-275 justify-center">
                        <div id="experience-content-items-work-preview" className="z-10 w-24 md:w-48 m-auto">
                            <img id="experience-content-items-work-preview-img" src={isah_img} alt="vorige-opleiding" className="z-10 rounded-full" />
                        </div>
                        <div id="experience-content-items-work-preview-description" className="z-10 pt-2 text-left text-body-small md:text-body-large lg:w-210">
                                <label id="experience-content-items-work-preview-description-title" className="z-10"><span className="font-gotham-rounded-bookitalic">Functie:</span> Stagair<br></br><span className="font-gotham-rounded-bookitalic">Locatie:</span> Droogdokkeneiland 11, 5026 SP Tilburg<br></br><br></br></label>
                                <label id="experience-content-items-work-preview-description-rest" className="z-10">
                                Voor de opleiding HBO-ICT aan Fontys Hogescholen heb ik stage gelopen bij Isah B.V, een bedrijf gespecialiseerd in ERP Software voor de maakindustrie. 
                                Ik heb voor Isah B.V. een hele leuke en uitdagende opdracht mogen doen: <label className="font-gotham-rounded-bolditalic"> De stageopdracht omvat: Het herinrichten/vernieuwen van de infrastructuur monitoring, afgestemd op de wensen/behoeften van Isah B.V. </label>
                                Gedurende de stageperiode heb ik het erg naar mijn zin gehad en erg veel geleerd, zowel met betrekking op de techniek als op de professionele vaardigheden (zoals onderzoeken, documentatie en communicatie).
                                </label>
                        </div>
                    </div>
                    <div id="experience-content-items-button" className="mb-20 lg:flex">
                        <Button id="experience-work-read-more" on_click={()=> history.push('/ervaring')} border_color="border-light_primary" content="Lees meer"/>
                    </div>               
                </div>        
            </div>
        </div>
    )
}

export default ExperiencePreview
