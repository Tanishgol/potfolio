import React from 'react';
import Project1 from '../Assets/Project-1.png';
import Project2 from '../Assets/Project-2.jpeg';

const Work = () => {
    return (
        <>
            <section id="work" className="Work py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <button className="btn btn-secondary btn-lg mt-5 px-4 py-2 shadow-sm mb-3">Work</button>
                        <h2 className="mt-3">Some of the noteworthy projects I have built:</h2>
                    </div>
                    <div className="row align-items-center mb-5 rounded-3 p-4 shadow">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <img src={Project1} alt="Wingie Project Screenshot" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="fw-bold">Enhanced Invoice System</h3>
                            <p className='text-justify'>
                                This project is a responsive Enhanced Invoice System designed to help users generate invoices by capturing customer and product details, calculating totals with tax, and generating a PDF version of the invoice.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge" style={{ backgroundColor: "#E44D26", color: "#fff" }}>HTML</span>
                                <span className="badge" style={{ backgroundColor: "#2965F1", color: "#fff" }}>CSS</span>
                                <span className="badge" style={{ backgroundColor: "#F7DF1E", color: "#000" }}>JavaScript</span>
                                <span className="badge" style={{ backgroundColor: "#7952B3", color: "#fff" }}>Bootstrap 5</span>
                                <span className="badge" style={{ backgroundColor: "#D32F2F", color: "#fff" }}>jsPDF</span>
                            </div>
                            <a href="https://github.com/Tanishgol/Invoice" className="btn btn-outline-secondary mt-3">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="row align-items-center mb-4 rounded-3 p-4 shadow">
                        <div className="col-lg-6 order-lg-2 mb-3 mb-lg-0">
                            <img src={Project2} alt="Fiskil Project Screenshot" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h3 className="fw-bold">Expense-Manager</h3>
                            <p className='text-justify'>
                                The Expense Management System is a comprehensive web application designed to help users track their income, expenses, and budgets effectively.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge" style={{ backgroundColor: "#E44D26", color: "#fff" }}>HTML</span>
                                <span className="badge" style={{ backgroundColor: "#2965F1", color: "#fff" }}>CSS</span>
                                <span className="badge" style={{ backgroundColor: "#F7DF1E", color: "#000" }}>JavaScript</span>
                                <span className="badge" style={{ backgroundColor: "#7952B3", color: "#fff" }}>Bootstrap 5</span>
                                <span className="badge" style={{ backgroundColor: "#007BFF", color: "#fff" }}>AJAX</span>

                            </div>
                            <a href="https://github.com/Tanishgol/Expense-Manager" className="btn btn-outline-secondary mt-3">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work;