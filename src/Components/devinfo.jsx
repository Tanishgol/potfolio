import React from 'react';
import { BounceLoader } from 'react-spinners';
import '../Styles/globle.css';
import tanishimage from '../Assets/Tanish_passport.jpg';

const Devinfo = () => {
    return (
        <>
            <section className="DevInfo bg-light py-5">
                <div className="container">
                    <div className="row custom-flex align-items-center">
                        <div className="col-12 col-lg-8 text-column d-flex flex-column justify-content-center">
                            <h1 className="info-heading text-center text-lg-start fs-1 mb-3">
                                Hi, I'm Tanish 👋
                            </h1>
                            <p className="info-description text-justify mb-4">
                                I'm a Full Stack Developer skilled in{" "}
                                <span className="fw-semibold">
                                    HTML, CSS, Bootstrap, &amp; JavaScript,
                                </span>{" "}
                                focused on creating fast, responsive, &amp; user-friendly websites.
                                Currently, I'm a trainee at Dreamspot IT Academy in Rajkot, learning{" "}
                                <span className="fw-semibold">ReactJS</span> to enhance my skills in
                                modern web development. I'm passionate about building exceptional
                                digital experiences &amp; excited to grow in this dynamic field.
                            </p>
                            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start mb-3">
                                <div className="info-user-location d-flex align-items-center me-lg-4 mb-3 mb-lg-0">
                                    <i className="bi bi-geo-alt text-primary me-2" />
                                    <span className="fw-semibold">Rajkot, Gujarat</span>
                                </div>
                                <div className="info-availability d-flex align-items-center">
                                    <BounceLoader className='mx-2' color="rgba(15, 185, 129, 1)" size={16} />
                                    <span className="fw-semibold">Available for new projects</span>
                                </div>
                            </div>
                            <div className="info-social-handle d-flex justify-content-center justify-content-lg-start gap-3">
                                <a className="social-handle-link text-dark fs-5" href="https://github.com/Tanishgol" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github" />
                                </a>
                                <a className="social-handle-link text-dark fs-5" href="https://x.com/tanishgol" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter" />
                                </a>
                                <a className="social-handle-link text-dark fs-5" href="https://www.linkedin.com/in/tanish-gol-330a34284/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 image-column text-center">
                            <img className="info-image img-fluid rounded Dev-image-right" src={tanishimage} alt="Tanish" width="350px" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Devinfo