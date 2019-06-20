import React from 'react';
import { Route, Switch } from 'react-router-dom'
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import '../styles/Header.css'

const Header = () => {
    // elementy do pierwszego sposobu tzn losowanie obrazka
    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * images.length);
    // const img = images[index];
    return (
        <>
            {/* PIERWSZY SPOSÓB- losowanie zdjęcia */}


            {/* <img src={img} alt="header" /> */}


            {/* DRUGI SPOSÓB- ustawienie zdjęcia na stałe */}
            {/* exact powoduje, ze przeglądarka nie szuka wiecej pasujacych "scieżek" jak już jedną znajdzie// zawsze podawaj przy linku do home */}

            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="miasto" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img3} alt="miasto" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img2} alt="miasto" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img3} alt="miasto" />
                )} />
                <Route render={() => (
                    <img src={img1} alt="miasto" />
                )} />
            </Switch>


        </>
    );
}

export default Header;