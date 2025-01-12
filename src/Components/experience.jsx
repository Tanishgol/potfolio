import React from 'react';
import UpWorkLogo from '../Assets/logo-upwork.5f1fcd5c.svg';
import GreenApexLogo from '../Assets/logo-greenapex.f61a5e20.svg';
import DotPixelLogo from '../Assets/logo-dotnpixel.11466e70.svg';

const Experience = () => {
    return (
        <>
            <section className="Experience py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <button type="button" className="btn btn-secondary btn-lg px-4 py-2 shadow-sm mb-3">
                            Experience
                        </button>
                        <h2 className="experience-description fw-bold">
                            Here is a quick summary of my most recent experiences:
                        </h2>
                    </div>
                    <div className="row bg-tertiary align-items-center border rounded shadow-sm py-5 px-3 mb-4">
                        <div className="col-md-2 col-sm-12 col-12 col-4 col-4 text-center mb-3 mb-md-0">
                            <img src={UpWorkLogo} alt="Upwork Logo" className="img-fluid" style={{ maxHeight: 80 }} />
                        </div>
                        <div className="col-md-7 col-sm-12 col-12">
                            <h3 className="experience-heading fw-bold">Independent Freelancer</h3>
                            <ul>
                                <li>
                                    Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.
                                </li>
                                <li>
                                    Technologies: React, Next.js, TypeScript, Express.js, PostgreSQL,
                                    TailwindCSS, MUI, Firebase, Storybook, Cypress, and more.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-md-end text-center">
                            <p className="Exp-date fw-semibold text-muted">Nov 2021 - Present</p>
                        </div>
                    </div>
                    <div className="row bg-tertiary align-items-center border rounded shadow-sm py-5 px-3 mb-4">
                        <div className="col-md-2 col-sm-12 col-12 col-4 col-4 text-center mb-3 mb-md-0">
                            <img src={GreenApexLogo} alt="GreenApex Logo" className="img-fluid" style={{ maxHeight: 80 }} />
                        </div>
                        <div className="col-md-7 col-sm-12 col-12">
                            <h3 className="experience-heading fw-bold">Team Lead</h3>
                            <ul>
                                <li>Acted as team lead in different projects.</li>
                                <li>
                                    Brainstormed new ideas &amp; gathered requirements for internal
                                    projects.
                                </li>
                                <li>
                                    Designed architecture of different projects (frontend + backend).
                                </li>
                                <li>Worked on enterprise-level projects for a variety of clients.</li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-md-end text-center">
                            <p className="Exp-date fw-semibold text-muted">Jul 2017 - Oct 2021</p>
                        </div>
                    </div>
                    <div className="row bg-tertiary align-items-center border rounded shadow-sm py-5 px-3">
                        <div className="col-md-2 col-sm-12 col-12 col-4 text-center mb-3 mb-md-0">
                            <img src={DotPixelLogo} alt="DotnPixel Logo" className="img-fluid" style={{ maxHeight: 80 }} />
                        </div>
                        <div className="col-md-7 col-sm-12 col-12">
                            <h3 className="experience-heading fw-bold">Full Stack Developer</h3>
                            <ul>
                                <li>Worked as a full stack developer (React).</li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-md-end text-center">
                            <p className="Exp-date fw-semibold text-muted">Dec 2015 - May 2017</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience