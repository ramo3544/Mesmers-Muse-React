import { useState } from 'react'
import '../stylesheets/nav-bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../assets/MMR_logo_colorBG.png'
import { HashLink as Link } from 'react-router-hash-link';
//https://getbootstrap.com/docs/5.3/components/navbar/#offcanvas

function collapseNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');

    if (offcanvasNavbar.classList.contains('show')) {
        navbarToggler.click();
    }
}

export function NavBar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id='nav-bar'>
                <nav className="navbar bg-body-tertiary fixed-top object-fit-cover" data-bs-theme='dark'>
                    <div className="container-fluid pb-2 pt-3">
                        <div className="container-logo">
                            <a className="navbar-brand" href="#">
                                <img id='nav-bar-logo' className='d-lg-inline-block align-text-top rounded' src={logo} alt="Mesmer's Muse"/>
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                             aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Mesmer's Muse</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item" onClick={collapseNavbar}>
                                        <Link className="nav-link active" aria-current="page" to='/#about-us'>About Us</Link>
                                    </li>
                                    <li className="nav-item" onClick={collapseNavbar}>
                                        <Link className="nav-link" to='/#get-connected'>Get Connected!</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to='#' role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Artists Label
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li onClick={collapseNavbar}><Link className="dropdown-item" to='/mists-of-avery/#mists-of-avery-band-section'>Mists Of Avery</Link></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item nav-item disabled" href="#" >More Coming Soon!</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}