import React from 'react';
import DevImage from '../Assets/Tanish_secondary_edited.jpg';
import '../Styles/globle.css';

const Aboutme = () => {
    return (
        <>
            <section id="about" className="AboutMe py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center mb-5">
                                <button type="button" className="btn btn-secondary mt-5 btn-lg px-4 py-2 shadow-sm">
                                    About Me
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-md-5 col-sm-12 mb-4 mb-md-0 text-center">
                            <img className="img-fluid rounded Dev-image-left" loading="lazy" src={DevImage} alt="Pic of Tanish" width="100%" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                            <h2 className="mb-4 fw-bold text-dark">Curious about me? Here you have it:</h2>
                            <p className="mb-3 text-justify">
                                I'm a passionate, self-proclaimed designer specializing in full-stack development with proficiency in <strong>HTML, CSS, Javascript, and Bootstrap</strong>. I love blending the technical and visual aspects of digital products to create impactful experiences. User experience, pixel-perfect design, and writing clear, readable, and high-performing code are my priorities.
                            </p>
                            <p className="mb-3 text-justify">
                                Currently, I am currently training as a Full-Stack Developer at <a className="link-underline text-primary text-decoration-none fw-bold" href='https://www.linkedin.com/company/dreamspot-it-academy/posts/?feedView=all'>Dreamspot IT Academy</a>. Although new to the field, I'm eager to learn, take on new challenges, and master the latest technologies.
                            </p>
                            <p className="mb-3 text-justify">
                                I'm a progressive thinker and enjoy working on products end-to-end, from ideation to development.
                            </p>
                            <p className="mb-4 text-justify">
                                When I'm not in full-on developer mode, you can find me exploring Twitter, learning from early startups, or enjoying free time. Follow me on <a href="https://x.com/tanishgol" className="link-underline text-primary text-decoration-none fw-bold">Twitter</a>  for tech bites or check out my <a href="https://github.com/Tanishgol" className="link-underline text-primary text-decoration-none fw-bold">GitHub</a> for projects.
                            </p>
                            <p className="fw-bold mb-2">Quick facts about me:</p>
                            <ul className="list-unstyled">
                                <li className="mb-2 d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                    Diploma in Computer Engineering (pursuing)
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                    Currently studying full-stack development
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                    Learning ReactJS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme;