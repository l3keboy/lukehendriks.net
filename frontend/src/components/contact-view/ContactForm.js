import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios'

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [error_state, setErrorState] = useState({ active: false })
    const toggleClassError = () => {
        setErrorState({ active: !error_state.active });
    };

    const [success_state, setSuccessState] = useState({ active: false })
    const toggleClassSuccess = () => {
        setSuccessState({ active: !success_state.active });
    };
    
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handle_contact_form = useCallback(async (e) => {
        e.preventDefault()
        if (!executeRecaptcha) {
            return;
        }
        const stage = process.env.REACT_APP_STAGE
        const token = await executeRecaptcha('verify');

        if (stage === "dev") {
            const response = axios.post(process.env.REACT_APP_DEV_BACKEND + "/validate_recaptcha_v3", {token: token})
            if ((await response).data.response === "success") {
                const response = axios.post(process.env.REACT_APP_DEV_BACKEND + "/contact_mail", {sender_name: name, sender_email: email, sender_subject: subject, sender_message: message})
                if ((await response).data.response.status === "success") {
                    toggleClassSuccess()
                } else {
                    toggleClassError()
                }
            } else {
                toggleClassError()
            }
        } else {
            const response = axios.post(process.env.REACT_APP_PROD_BACKEND + "/validate_recaptcha_v3", {token: token})
            if ((await response).data.response === "success") {
                const response = axios.post(process.env.REACT_APP_PROD_BACKEND + "/contact_mail", {sender_name: name, sender_email: email, sender_subject: subject, sender_message: message})
                if ((await response).data.response.status === "success") {
                    toggleClassSuccess()
                } else {
                    toggleClassError()
                }
            } else {
                toggleClassError()
            }
        }

    }, [executeRecaptcha, name, email, message, subject]);
    
    return (
        <div id="contact-form" className="bg-light_primary text-light_secondary">
            <div id="contact-form-content" className="flex flex-col m-auto max-w-content-small md:max-w-content-medium lg:max-w-content-large mt-12 md:mt-18 lg:mt-24">
                <div id="contact-form-content-box" className="shadow-3xl border-t-light_accent border-t-4 justify-center">
                    <div id="contact-form-content-box-title" className="text-center mt-3 md:mt-4 lg:mt-5">
                        <label id="contact-form-content-box-title-text" className="font-gotham-rounded-bold text-h2-small md:text-h2-large mt-12 md:mt-18 lg:mt-24">Contact</label>
                    </div>
                    <div id="mail-send-success" className={success_state.active ? "px-5 md:px-20 lg:px-40" : "hidden px-5 md:px-20 lg:px-40"}>
                        <div className="text-light_primary px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
                            <span className="inline-block align-middle mr-8">
                                <label className="font-gotham-rounded-mediumitalic">Bedankt! <label className="font-gotham-rounded-light">De e-mail is verstuurd</label></label> 
                            </span>
                            <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={toggleClassSuccess}>
                                <span>×</span>
                            </button>
                        </div>
                    </div>
                    <div id="mail-send-error" className={error_state.active ? "px-5 md:px-20 lg:px-40" : "hidden px-5 md:px-20 lg:px-40"}>
                        <div className="text-light_primary px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
                            <span className="inline-block align-middle mr-8">
                                <label className="font-gotham-rounded-mediumitalic">Oh nee! <label className="font-gotham-rounded-light">Er is iets fout gegaan tijdens het verturen van de mail!</label></label> 
                            </span>
                            <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={toggleClassError}>
                                <span>×</span>
                            </button>
                        </div>
                    </div>
                    <div id="contact-form-content-box-form-box" className="px-5 md:px-20 lg:px-40">
                        <form id="contact-form-content-box-form" onSubmit={handle_contact_form} className="flex flex-col justify-center m-auto">
                            <div id="contact-form-content-box-form-box-name-mail" className="lg:flex lg:flex-row lg:justify-between">
                                <div id="contact-form-content-box-form-box-name" className="mt-4 md:mt-8">
                                    <span id="contact-form-content-box-form-box-name-span" className="font-gotham-rounded-book text-h4-small md:text-h4-large">Volledige naam <span className="text-light_accent">*</span></span>
                                    <input id="contact-form-content-box-form-box-name-input"
                                            type="text" placeholder="Volledige naam" value={name} onChange={e=>setName(e.target.value)} required 
                                            className="outline-none w-full bg-transparent border-b-2 py-1 md:py-2 font-gotham-rounded-lightitalic focus:border-b-light_accent text-h4-small md:text-h4-large"/>
                                </div>
                                <div id="contact-form-content-box-form-box-email" className="mt-4 md:mt-8">
                                    <span id="contact-form-content-box-form-box-email-span" className="font-gotham-rounded-book text-h4-small md:text-h4-large">E-mail <span className="text-light_accent">*</span></span>
                                    <input id="contact-form-content-box-form-box-email-input"
                                            type="email" placeholder="mail@adres.nl" value={email} onChange={e=>setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}" required 
                                            className="outline-none w-full bg-transparent border-b-2 py-1 md:py-2 font-gotham-rounded-lightitalic focus:border-b-light_accent text-h4-small md:text-h4-large"/>
                                </div>
                            </div>
                            <div id="contact-form-content-box-form-box-subject" className="mt-4 md:mt-8">
                                <span id="contact-form-content-box-form-box-subject-span" className="font-gotham-rounded-book text-h4-small md:text-h4-large">Wat is het onderwerp? <span className="text-light_accent">*</span></span>
                                <input id="contact-form-content-box-form-box-subject-input"
                                            type="text" placeholder="Onderwerp" value={subject} onChange={e=>setSubject(e.target.value)} required 
                                            className="outline-none w-full bg-transparent border-b-2 py-1 md:py-2 font-gotham-rounded-lightitalic focus:border-b-light_accent text-h4-small md:text-h4-large"/>
                            </div>
                            <div id="contact-form-content-box-form-box-message" className="mt-4 md:mt-8">
                                <span id="contact-form-content-box-form-box-message-span" className="font-gotham-rounded-book text-h4-small md:text-h4-large">Bericht <span className="text-light_accent">*</span></span>
                                <textarea id="contact-form-content-box-form-box-message-textarea"
                                            placeholder="Bericht" value={message} onChange={e=>setMessage(e.target.value)} required 
                                            className="outline-none w-full bg-transparent border-b-2 py-1 md:py-2 font-gotham-rounded-lightitalic focus:border-b-light_accent text-h4-small md:text-h4-large overflow-hidden h-24 md:h-40"/>
                            </div>   
                            <div id="contact-form-content-box-form-box-privacy" className="flex justify-center m-auto">
                                <input id="contact-form-content-box-privacy-button"
                                                type="checkbox" required />
                                <span id="contact-form-content-box-form-box-privacy-agreement" className="font-gotham-rounded-light text-footer1-small md:text-footer1-large">&nbsp; Hierbij geef ik toestemming voor het gebruik van de bovenstaande gegevens. 
                                 Voor meer informatie zie <Link to="/privacy" className="hover:font-gotham-rounded-bolditalic text-light_accent">de privacyverklaring</Link> en <Link to="/gebruiksvoorwaarden" className="hover:font-gotham-rounded-bolditalic text-light_accent">de gebruiksvoorwaarden</Link>. <span className="text-light_accent">*</span></span>
                            </div>      
                            <button id="contact-for-content-box-form-submit" type="submit" value="Submit" className="border-light_accent text-h3-small mt-12 md:text-h4-large border-2 rounded-xl px-4 py-1 mb-6 md:mb-8 hover:bg-light_accent hover:text-light_primary mx-auto">Verstuur</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
