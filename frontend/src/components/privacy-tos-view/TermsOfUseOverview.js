import React from 'react'
import { Link } from 'react-router-dom'

const TermsOfUseOverview = () => {
    return (
        <div id="terms-of-use" className="bg-light_primary text-light_secondary">
            <div id="terms-of-use-content" className="flex flex-col m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="terms-of-use-content-title" className="font-gotham-rounded-bold text-h2-small md:text-h2-large mt-12 md:mt-18 lg:mt-24">Gebruiksvoorwaarden</label>
                <label>Laatst bijgewerkt: 29-12-2021 14:38</label>
                <hr className="bg-light_accent w-60 md:w-172 lg:w-275 h-0.5 md:h-1 lg:h-1.5 mb-3 md:mb-4 lg:mb-5 rounded border-0 " />
                <div id="terms-of-use-content-preview-container" className="flex flex-col text-body-small md:text-body-large">
                    <label id="terms-of-use-content-preview-container-acceptance" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Acceptatie van de voorwaarden</label>
                    <label id="terms-of-use-content-preview-container-acceptance-description" className="mb-5">
                    Lees deze gebruiksvoorwaarden ("Algemene voorwaarden", "Voorwaarden") aandachtig door voordat u deze gebruikt! De toegang tot en gebruik van de 
                     <Link to="/" className="hover:font-gotham-rounded-bolditalic text-light_accent"> https://www.lukehendriks.net/</Link> website ("ons", "wij", of "onze") is afhankelijk van 
                     uw aanvaarding en naleving van deze voorwaarden. Deze voorwaarden zijn van toepassing op alle bezoekers, gebruikers en anderen die toegang hebben tot of gebruik maken van de service.
                     Door toegang te krijgen tot of gebruik te maken van de service, gaat u ermee akkoord gebonden te zijn aan deze Voorwaarden. Als u het niet eens bent met enig onderdeel van de 
                     voorwaarden, hebt u geen toegang tot de service.
                    </label>

                    <label id="terms-of-use-content-preview-container-content" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Content op deze website</label>
                    <label id="terms-of-use-content-preview-container-content-description" className="mb-5">
                    Tenzij anders wordt aangegeven of duidelijk herkenbaar is, is alle in deze website beschikbare content eigendom van de eigenaar of zijn licentiegevers en wordt 
                     door deze verstrekt. De eigenaar doet zijn uiterste best om ervoor te zorgen dat in deze website aangeboden content geen inbreuk maakt op toepasselijke wet- en 
                     regelgeving of rechten van derden. Het is echter niet altijd mogelijk om dit resultaat te bereiken. In deze gevallen, zonder afbreuk te doen aan wettelijke rechten
                     van gebruikers om hun rechten af te dwingen, wordt gebruikers verzocht om hieraan gerelateerde klachten te melden, bij voorkeur door <Link to="/contact" 
                     className="hover:font-gotham-rounded-bolditalic text-light_accent"> het contact formulier</Link> in te vullen.
                    </label>

                    <label id="terms-of-use-content-preview-container-privacy-cookies" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Privacy- en cookieverklaring</label>
                    <label id="terms-of-use-content-preview-container-privacy-cookies-description" className="mb-5">
                    Op deze website worden privacygevoelige gegevens verwerkt en wordt er gebruik gemaakt van functionele cookies, {<Link to="/privacy" className="hover:font-gotham-rounded-bolditalic text-light_accent">de privacyverklaring
                     </Link>} is van toepassing.
                    </label>

                    <label id="terms-of-use-content-preview-container-third-party" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Links naar derde partijen</label>
                    <label id="terms-of-use-content-preview-container-third-party-description" className="mb-5">
                    Onze service kan links bevatten naar websites of services van derden die geen eigendom zijn van of beheerd worden door ons. Wij hebben geen controle 
                     over en aanvaardt geen verantwoordelijkheid voor de inhoud, privacybeleid of praktijken van websites of diensten van derden. U erkent verder en stemt ermee in 
                     dat wij niet verantwoordelijk of aansprakelijk zijn, direct of indirect, voor enige schade of verlies veroorzaakt of beweerd te zijn veroorzaakt door of in 
                     verband met het gebruik van of het vertrouwen op enige dergelijke inhoud, goederen of diensten die beschikbaar zijn op of via dergelijke websites of diensten.
                    </label>

                    <label id="terms-of-use-content-preview-container-changes" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Aanpassingen aan de gebruiksvoorwaarden</label>
                    <label id="terms-of-use-content-preview-container-changes-description" className="mb-5">
                    We zullen deze gebruiksvoorwaarden blijven evalueren terwijl we onze diensten bijwerken en uitbreiden, en we kunnen dienovereenkomstig wijzigingen aanbrengen 
                     in de gebruiksvoorwaarden. We zullen de datum voor het laatst bijgewerkt hierboven herzien. We raden u aan deze pagina regelmatig te controleren op updates 
                     om op de hoogte te blijven.
                    </label>

                    <label id="terms-of-use-content-preview-container-contact" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Contact</label>
                    <label id="terms-of-use-content-preview-container-contact-description" className="mb-5">
                    Mocht je vragen of andere op- of aanmerkingen hebben over de gebruiksvoorwaarden, aarzel dan niet om contact op te nemen! Dit kan door
                     <Link to="/contact" className="hover:font-gotham-rounded-bolditalic text-light_accent"> het contact formulier</Link> in te vullen, gelieve dit duidelijk in het onderwerp te vermelden!
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUseOverview
