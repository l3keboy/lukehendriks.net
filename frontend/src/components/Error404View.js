import React from 'react'
import { useHistory  } from 'react-router-dom'

const Error404View = () => {
    const history = useHistory();

    return (
        <div id="404" className="z-0 bg-light_secondary flex flex-col items-center h-screen w-screen">
            <div className="absolute top-0 left-0 h-screen w-screen">
                <canvas height="100vh" width="100vw" className="h-screen w-screen"></canvas>
            </div>
            <div id="404-content" className="z-10 flex flex-col md:w-172 lg:w-175 justify-center text-center max-w-content-small md:max-w-content-medium lg:max-w-content-large m-auto">
                <div id="404-content-text" className="z-10 md:w-172 lg:w-175 text-light_primary">
                    <label className="z-10 font-gotham-rounded-light text-h2-small md:text-h2-large"><span className="z-10 font-gotham-rounded-medium text-h1-small md:text-h1-large text-light_accent">Oeps!</span><br></br>Deze pagina bestaat niet!</label>
                </div>
                <div id="404-content-button-container" className="z-10">
                    <button id="button" onClick={()=> history.push('/')} className="border-light_accent text-light_primary text-h3-small mt-4 md:text-h3-large border-4 rounded-xl px-4 py-1">Terug naar thuis</button>
                </div>
            </div>
            <div className="w-60 md:w-210 lg:w-275 h-4 md:h-8 bg-light_primary shadow-3xl transform translate-y-2 md:translate-y-4"></div>
        </div>
    )
}

export default Error404View
