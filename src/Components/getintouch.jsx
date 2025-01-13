import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            toast.success('Copied to clipboard!');
        })
        .catch((err) => {
            console.error('Failed to copy: ', err);
            toast.error('Failed to copy. Please try again.');
        });
}

const Getintouch = () => {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <section className="getintouch py-5 bg-light">
                <div className="container text-center">
                    <button className="btn btn-secondary btn-lg px-4 py-2 shadow-sm mb-3">Get in Touch</button>
                    <p className="fs-5 text-muted">
                        What's next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
                    </p>
                    <div className="d-flex flex-column align-items-center mt-4">
                        <div className="d-flex align-items-center mb-3 flex-wrap">
                            <i className="fa-solid fa-envelope display-6 me-2"></i>
                            <span className="display-6 fw-bold" id="email">goltanish2@gmail.com</span>
                            <button className="btn btn-secondary btn-sm ms-3 mt-2 mt-sm-0" title="Copy to Clipboard" onClick={() => copyToClipboard('goltanish2@gmail.com')}>
                                <i className="fa-regular fa-copy"></i>
                            </button>
                        </div>
                        <div className="d-flex align-items-center mb-3 flex-wrap">
                            <i className="fa-solid fa-phone display-6 me-2"></i>
                            <span className="display-6 fw-bold" id="phone">+91 1234567980</span>
                            <button className="btn btn-secondary btn-sm ms-3 mt-2 mt-sm-0" title="Copy to Clipboard" onClick={() => copyToClipboard('+91 1234567980')}>
                                <i className="fa-regular fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    <p className="mt-3 text-muted">You may also find me on these platforms!</p>
                    <div className="d-flex justify-content-center gap-4 flex-wrap">
                        <a href="https://github.com/Tanishgol" className="fs-3 text-dark">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://x.com/tanishgol" className="fs-3 text-dark">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tanish-gol-330a34284/" className="fs-3 text-dark">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Getintouch;