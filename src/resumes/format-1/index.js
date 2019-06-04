import React from 'react';
import './style.css';
import DATA from '../../providers/Data';

function resume1() {
    return (
        <div className="resume" id="resume">

            <div className="resume-header">
                <div className="name">{DATA.name}</div>
                <div className="bio">{DATA.designation}</div>
                <div className="desrciption">{DATA.aboutMe}</div>
            </div>

            <div className="personal-details">
                <div className="row">
                    {DATA.details.map((detail, index) => {
                        return (
                            <div className="col-6" key={index}>
                                <i className={detail.icon}></i> <span>{detail.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="professional-details">
                <div className="row">
                    {/* Part 1 */}
                    <div className="col-6 f1-side-1">
                        <div className="f1-section">
                            <div className="heading">SKILLS</div>
                            <div className="f1-skills f1-sub-section">
                                {DATA.skills.map((skill, index) => {
                                    return (<span key={index}>{skill}</span>);
                                })}
                            </div>
                        </div>

                        <div className="f1-section f1-section-border">
                            <div className="heading">Work Experience</div>
                            {DATA.experience.map((experience, index) => {
                                return (
                                    <div className={'f1-sub-section ' + (index !== 0 ? 'f1-margin-top-15' : '')} key={index}>
                                        <div className="f1-ex-compnay">{experience.company} <span className="f1-ex-position">({experience.designation})</span></div>
                                        <div className="row f1-ex-working">
                                            <div className="col-6">
                                                <i className="fa fa-calendar"></i>
                                                <span>{experience.duration}</span>
                                            </div>
                                            <div className="col-6">
                                                <i className="fa fa-map"></i>
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>
                                        <div className="f1-ex-desc">
                                            {experience.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="f1-section f1-section-border">
                            <div className="heading">Education</div>
                            {DATA.educations.map((education, index) => {
                                return (
                                    <div key={index} className={'f1-sub-section ' + (index !== 0 ? 'f1-margin-top-15' : '')}>
                                        <div className="f1-edu-degree">{education.name} <span className="f1-edu-stream">({education.stream})</span></div>
                                        <div className="f1-edu-college">{education.college}</div>
                                        <div className="row f1-edu-time-place">
                                            <div className="col-6">
                                                <i className="fa fa-calendar"></i>
                                                <span>{education.duration}</span>
                                            </div>
                                            <div className="col-6">
                                                <i className="fa fa-map"></i>
                                                <span>{education.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                    {/* Part 2 */}
                    <div className="col-6 f1-side-2">
                        <div className="f1-section">
                            <div className="heading">Projects</div>
                            {DATA.projects.map((project, index) => {
                                return (
                                    <div className="project" key={index}>
                                        <div className="project-name">
                                            <span>{project.name}</span>
                                            {project.link &&
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="f1-project-link">
                                                    <i className="fa fa-link"></i>
                                                </a>
                                            }
                                        </div>
                                        <div className="achievements">{project.tech}</div>
                                        <div className="project-desc">{project.desc}</div>
                                    </div>
                                );
                            })}
                        </div>




                    </div>

                </div>
            </div>

        </div>
    )
}

export default resume1;