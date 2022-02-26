import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyOverview = () => {
    return (
        <div id="privacy" className="bg-light_primary text-light_secondary">
            <div id="privacy-content" className="flex flex-col m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large">
                <label id="privacy-content-title" className="font-gotham-rounded-bold text-h2-small md:text-h2-large mt-12 md:mt-18 lg:mt-24">Privacyverklaring</label>
                <label>Laatst bijgewerkt: 29-12-2021 14:38</label>
                <hr className="bg-light_accent w-60 md:w-172 lg:w-275 h-0.5 md:h-1 lg:h-1.5 mb-3 md:mb-4 lg:mb-5 rounded border-0 " />
                <div id="privacy-content-preview-container" className="flex flex-col text-body-small md:text-body-large">
                    <label id="privacy-content-preview-container-save-and-use-data" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Opslaan en gebruik van gegevens</label>
                    <label id="privacy-content-preview-container-save-and-use-data-description" className="mb-5">
                    Deze website maakt gebruik van een contactformulier, hierbij worden en verschillende persoonsgegevens gebruikt. Het gaat hierbij om: {<label className="font-gotham-rounded-bookitalic">
                     Jouw naam</label>} en {<label className="font-gotham-rounded-bookitalic">jouw e-mail adres</label>}. Deze gegevens worden uitsluitend gebruikt voor het contactformulier en zullen,
                     buiten de e-mail om, niet opgeslagen worden. 
                    </label>

                    <label id="privacy-content-preview-container-cookies" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Cookies</label>
                    <label id="privacy-content-preview-container-cookies-description" className="mb-5">
                    Deze website maakt uitsluitend gebruik van essentiële cookies. Deze cookies worden gebruikt voor de verificatie bij het invullen van het contactformulier. 
                    </label>

                    {/* <label id="privacy-content-preview-container-ga" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Google Analytics</label>
                    <label id="privacy-content-preview-container-ga-description" className="mb-5">
                    We gebruiken Google Analytics om bij te houden hoe bezoekers deze website gebruiken. Er is samen met Google Inc. (Google) een verwerkersovereenkomst afgesloten. Verder worden
                     de gegevens geanonimiseerd en hebben wij Google niet toegestaan de verkregen Analytische informatie te gebruiken voor andere Google diensten.
                    </label> */}

                    <label id="privacy-content-preview-container-recaptcha" className="text-h4-small md:text-h4-large font-gotham-rounded-book">reCAPTCHA</label>
                    <label id="privacy-content-preview-container-recaptcha-description" className="mb-5">
                    We gebruiken de reCAPTCHA service van Google Inc. (Google) om gegevens te beschermen die verstuurd worden via deze website. 
                     Die functie controleert of een bericht wel door een persoon wordt verstuurd, om zo te voorkomen dat ‘spam bots’ bijvoorbeeld 
                     automatisch berichten sturen of commentaren achterlaten. Hierbij worden het IP adres van een bezoeker en mogelijk ook andere 
                     data verstuurd om Google reCAPTCHA te laten werken. De inhoud van een bericht wordt hiervoor verstuurd naar en verwerkt door Google. 
                     Het IP adres wordt hierbij afgekort en daardoor anoniem gemaakt in landen die deel uitmaken van de EU en staten die deelnemen aan 
                     het verdrag voor het Europese economische gebied. In uitzonderingsgevallen wordt een IP adres volledig doorgegeven aan een Google 
                     server in de Verenigde Staten en daar afgekort. Namens de bezitter van deze website gebruikt Google deze gegevens om je gebruik van 
                     deze dienst te evalueren. Het IP adres dat reCAPTCHA doorgeeft, wordt niet samengevoegd met andere data van Google. Op het verzamelen 
                     van deze gegevens zijn Google’s regels voor gegevensbescherming van toepassing. Meer informatie over over Google’s privacybeleid vind 
                     je op {<a href="https://www.google.com/intl/nl/policies/privacy/" rel="noreferrer" target="_blank" className="hover:font-gotham-rounded-bolditalic text-light_accent">deze</a>} pagina. 
                     Door reCAPTCHA te gebruiken ga je ermee akkoord dat Google gegevens over jou verwerkt op de manier en voor het doel zoals hierboven beschreven.
                    </label>

                    <label id="privacy-content-preview-container-changes" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Aanpassingen aan het privacybeleid</label>
                    <label id="privacy-content-preview-container-changes-description" className="mb-5">
                    We zullen dit privacybeleid blijven evalueren terwijl we onze diensten bijwerken en uitbreiden, en we kunnen dienovereenkomstig wijzigingen aanbrengen 
                     in het privacybeleid. We zullen de datum voor het laatst bijgewerkt hierboven herzien. We raden u aan deze pagina regelmatig te controleren op updates 
                     om op de hoogte te blijven.
                    </label>

                    <label id="privacy-content-preview-container-contact" className="text-h4-small md:text-h4-large font-gotham-rounded-book">Contact</label>
                    <label id="privacy-content-preview-container-contact-description" className="mb-5">
                    Mocht je vragen of andere op- of aanmerkingen hebben over de privacyverklaring, aarzel dan niet om contact op te nemen! Dit kan door
                     <Link to="/contact" className="hover:font-gotham-rounded-bolditalic text-light_accent"> het contact formulier</Link> in te vullen, gelieve dit duidelijk in het onderwerp te vermelden!
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PrivacyOverview
