import React from 'react';
import '../Styles/globle.css';
import Avater from '../Assets/avatar-eugen.png';

const Testimonials = () => {
    return (
        <>
            <section id="testimonials" className="Testimonials py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <button className="btn btn-secondary btn-lg mt-5 px-4 py-2 shadow-sm mb-3">Testimonials</button>
                        <h2 className="mt-3">Nice things people have said about me:</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <div className="card border-0 bg-white shadow-sm h-100 text-center p-4">
                                <img src={Avater} className="rounded-circle mx-auto mb-3" loading="lazy" alt="Profile Pic" width="100" height="100" />
                                <div className="card-body">
                                    <blockquote className="blockquote mb-3">
                                        <p>
                                            "Job well done! I am really impressed. He is very very good at what he does! I would
                                            recommend Sagar and will rehire in the future for Frontend development."
                                        </p>
                                    </blockquote>
                                    <h5 className="card-title fw-bold">Krisztian Gyuris</h5>
                                    <p className="text-muted mb-0">Founder - inboxgenie.io</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-white shadow-sm h-100 text-center p-4">
                                <img src={Avater} className="rounded-circle mx-auto mb-3" loading="lazy" alt="Profile Pic" width="100" height="100" />
                                <div className="card-body">
                                    <blockquote className="blockquote mb-3">
                                        <p>
                                            "Great guy, highly recommended for any COMPLEX front-end development job! His skills
                                            are top-notch and he will be an amazing addition to any team."
                                        </p>
                                    </blockquote>
                                    <h5 className="card-title fw-bold">Eugen Esanu</h5>
                                    <p className="text-muted mb-0">Founder - shosho.design</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 bg-white shadow-sm h-100 text-center p-4">
                                <img src={Avater} className="rounded-circle mx-auto mb-3" loading="lazy" alt="Profile Pic" width="100" height="100" />
                                <div className="card-body">
                                    <blockquote className="blockquote mb-3">
                                        <p>
                                            "Sagar was extremely easy and pleasant to work with and he truly cares about the
                                            project being a success."
                                        </p>
                                    </blockquote>
                                    <h5 className="card-title fw-bold">Joe Matkin</h5>
                                    <p className="text-muted mb-0">Freelancer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;