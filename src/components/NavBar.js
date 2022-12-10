import React from 'react';
import logo from '../images/pipas.png';
import '../styles/navbar.css';

import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img className='logo' src={logo} alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <CartWidget />
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/user">Usuario</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/catalogo">Catalogo</a>
                    </li>
                </ul>
            </div>
            <div className='bubble'><span>2</span></div>
        </nav>
    )
}

export default NavBar;