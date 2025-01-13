import React from 'react';
import '../Styles/globle.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top bgblur">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <h3 className="text-dark">&#60;TG &#8260;&#62;</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center fs-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item m-1 px-1 fw-semibold">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item m-1 px-1 fw-semibold">
                                <a className="nav-link" href="/">Work</a>
                            </li>
                            <li className="nav-item m-1 px-1 fw-semibold">
                                <a className="nav-link" href="/">Testimonials</a>
                            </li>
                            <li className="nav-item m-1 px-1 fw-semibold">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            <div className="border-start border-secondary border-3 ms-2 ps-2"></div>
                            <li className="nav-item m-1 px-1 fw-semibold">
                                <i className="bi bi-moon-stars fs-4 m-2"></i>
                            </li>
                            <li className="nav-item m-1 px-1 fw-semibold">
                                <button className="nav-button btn btn-secondary fw-semibold" type="button">Download CV</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
