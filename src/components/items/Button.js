import React from 'react'

const Button = (props) => {
    let button

    if (props.is_disabled) {
        button = <button id="button" disabled onClick={props.on_click} className="cursor-not-allowed border-light_accent text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1">{props.content}</button>
        if (props.border_color === "border-light_primary") {
            button = <button id="button" disabled onClick={props.on_click} className="cursor-not-allowed border-light_primary text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1">{props.content}</button>
        } else if (props.border_color === "border-light_secondary") {
            button = <button id="button" disabled onClick={props.on_click} className="cursor-not-allowed border-light_secondary text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1">{props.content}</button>
        } 
    } else {
        button = <button id="button" onClick={props.on_click} className="border-light_accent text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1">{props.content}</button>
        if (props.border_color === "border-light_primary") {
            button = <button id="button" onClick={props.on_click} className="border-light_primary text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1">{props.content}</button>
        } else if (props.border_color === "border-light_secondary") {
            button = <button id="button" onClick={props.on_click} className="border-light_secondary text-body-small mt-4 md:text-body-large border-2 rounded-xl px-4 py-1">{props.content}</button>
        } 
    }
    return (button)
}

export default Button
