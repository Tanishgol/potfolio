import React from 'react';
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
    return (
        <>
            <section className="Skills py-5 bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-secondary btn-lg px-4 py-2 shadow-sm mb-3">
                                Skills
                            </button>
                            <h2 className="skills-description fw-bold">
                                The skills, tools, and technologies I excel at:
                            </h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoHtml5 className="display-1" style={{ color: "#E44D26" }} />
                            <p className="Skills-Names mt-2 fw-semibold">HTML</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoCss3 className="display-1" style={{ color: "#1572B6" }} />
                            <p className="Skills-Names mt-2 fw-semibold">CSS</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoJavascript className="display-1" style={{ color: "#F7DF1E" }} />
                            <p className="Skills-Names mt-2 fw-semibold">JavaScript</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <FaBootstrap className="bi bi-bootstrap-fill display-1" style={{ color: "#7952B3" }} />
                            <p className="Skills-Names mt-2 fw-semibold">Bootstrap</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoReact className="display-1" style={{ color: "#61DAFB" }} />
                            <p className="Skills-Names mt-2 fw-semibold">React</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoRedux className="display-1" style={{ color: "#764ABC" }} />
                            <p className="Skills-Names mt-2 fw-semibold">Redux</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoTailwindCss className="display-1" style={{ color: "#06B6D4" }} />
                            <p className="Skills-Names mt-2 fw-semibold">TailwindCSS</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoNodejs className="display-1" style={{ color: "#68A063" }} />
                            <p className="Skills-Names mt-2 fw-semibold">NodeJS</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <SiExpress className="display-1" style={{ color: "#026E00" }} />
                            <p className="Skills-Names mt-2 fw-semibold">ExpressJS</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <DiMongodb className="display-1" style={{ color: "#47A248" }} />
                            <p className="Skills-Names mt-2 fw-semibold">MongoDB</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <RiNextjsFill className="display-1" style={{ color: "#000000" }} />
                            <p className="Skills-Names mt-2 fw-semibold">NextJS</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4">
                            <BiLogoGit className="bi bi-git display-1" style={{ color: "#F05033" }} />
                            <p className="Skills-Names mt-2 fw-semibold">Git</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;