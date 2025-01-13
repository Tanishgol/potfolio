import React from 'react';
import DreamSpotLogo from '../Assets/dreamSpot_logo.png';

const Experience = () => {
    return (
        <>
            <section className="Experience py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <button type="button" className="btn btn-secondary btn-lg px-4 py-2 shadow-sm mb-3">
                            Experience
                        </button>
                        <h2 className="experience-description fw-bold mb-5">
                            Here is a quick summary of my most recent experiences:
                        </h2>
                    </div>
                    <div className="row bg-tertiary align-items-center border rounded shadow-sm py-5 px-3 mb-4">
                        <div className="col-md-3 col-sm-12 col-12 col-4 text-center mb-3 mb-md-0">
                            <img src={DreamSpotLogo} alt="DreamSpot IT Academy Logo" className="img-fluid" style={{ maxHeight: 90 }} />
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <h3 className="experience-heading fw-bold text-center">Full-Stack Web Developer Trainee</h3>
                            <ul>
                                <li className='mb-2'>
                                    Contributed to multiple projects, gaining practical insights into modern web development practices.
                                </li>
                                <li className='mb-2'>
                                    Acquired hands-on experience with key technologies, including <span className='fw-semibold'>HTML</span>, <span className='fw-semibold'>CSS</span>, <span className='fw-semibold'>JavaScript</span>, and <span className='fw-semibold'>Bootstrap 5</span>.
                                </li>
                                <li>
                                    Currently learning <span className="fw-semibold">ReactJS</span> to enhance skills in modern front-end development.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-md-end text-center">
                            <p className="Exp-date fw-semibold text-muted">May 2024 - Present</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Experience;