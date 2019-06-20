import React from 'react';
import { Route } from 'react-router-dom'
import "../styles/Footer.css"

const Footer = () => {


    return (
        <div>
            <span>Stopka</span>

            <Route path="/:page" exact render={(props) => {
                return (
                    <p>jesteś na stronie {props.match.url.slice(1)}</p>
                )
            }} />

        </div>
    );
}

export default Footer;