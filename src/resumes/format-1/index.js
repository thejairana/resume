import React from 'react';
import './style.css';
import DATA from '../../providers/rinku';

function resume1() {
    return (
        <div className="resume" id="resume">

            <div className="f1-resume-header">
                <div className="f1-name">{DATA.name}</div>
                <div className="f1-designation">{DATA.designation}</div>
                <div className="f1-desrciption">{DATA.aboutMe}</div>
            </div>

            <div className="f1-personal-details">
                <div className="row">
                    {DATA.details.map((detail, index) => {
                        return (
                            <div className="col-6" key={index}>
                                <i className={detail.icon}></i>
                                <span dangerouslySetInnerHTML={{ __html: detail.html }}></span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="f1-professional-details">
                <div className="row">
                    {/* Part 1 */}
                    <div className="col-6 f1-side-1">
                        <div className="f1-section">
                            {/* <div className="f1-heading">SKILLS</div> */}
                            <div className="f1-skills f1-sub-section">
                                {DATA.skills.map((skill, index) => {
                                    return (<span key={index}>{skill}</span>);
                                })}
                            </div>
                        </div>

                        <div className="f1-section f1-section-border">
                            <div className="f1-heading">Work Experience</div>
                            {DATA.experience.map((experience, index) => {
                                return (
                                    <div className={'f1-sub-section ' + (index !== 0 ? 'f1-margin-top-15' : '')} key={index}>
                                        <div className="f1-ex-compnay">{experience.company} <span className="f1-ex-position">({experience.designation})</span></div>
                                        <div className="row f1-ex-working">
                                            <div className="col-6">
                                                <i className="fa fa-calendar"></i>
                                                <span>{experience.duration}</span>
                                            </div>
                                        </div>
                                        <div className="f1-ex-desc">
                                            {experience.desc}
                                        </div>
                                        <div className="f1-ex-desc">{experience.myRole}</div>
                                        <ul>
                                            {experience.points.map((point, index) => {
                                                return <li key={index}>{point}</li>
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="f1-section f1-section-border">
                            <div className="f1-heading">Education</div>
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
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                    {/* Part 2 */}
                    <div className="col-6 f1-side-2">
                        <div className="f1-section">
                            <div className="f1-heading">Heighlights</div>
                            <ul className="f1-heighlight-points">
                                <li>Handled multiple phone lines to make reservations, answer customer questions and give quotes</li>
                                <li>Transferred cars from location to location depending on customers' needs</li>
                                <li>Maintained the cleanliness and needs of the vehicle to ensure customer satisfaction</li>
                                <li>Took care that customers were satisfied and happy</li>
                                <li>Handled upset customers, conflicts and challenging situations.</li>
                                <li>Complete paperwork with customers and take payments.</li>
                                <li>Provide ongoing service and sales support.</li>
                                <li>Processed on-line, phone and walk-in reservations</li>
                                <li>Provided telephone customer service for escalated client issues</li>
                                <li>Ability to focus on multiple projects</li>
                                <li>Immense ability to generate rental, lease and used vehicle sales leads</li>
                                <li>Great ability to identify prospects for upgrades presentation to customers</li>
                                <li>Excellent Customer Service Skills</li>
                            </ul>
                        </div>

                        <div className="f1-section">
                            <div className="f1-heading">Address</div>
                            {/* <div>4C-28, ZONE-C, Shivalik Appartment, Sector-4, Indira Gandhi Nagar, Jagatpura</div>
                            <div>Jaipur, Rajasthan</div>
                            <div>302017</div> */}
                            <div>Quarter No - 235, Tower - 2, 9th Floor</div>
                            <div>ESIC Hosital Campus, Sector - 24</div>
                            <div>Noida, U.P. (201301)</div>
                            <div className="row" style={{ marginTop: "25px" }}>
                                <div className="col-6">
                                    <div><strong>Date:</strong></div>
                                    <div style={{ marginTop: "10px" }}><strong>Place:</strong></div>
                                </div>
                                <div className="col-6">
                                    <div style={{ marginTop: "35px" }}><strong>( Satendra Singh )</strong></div>
                                </div>

                            </div>
                        </div>




                    </div>

                </div>
            </div>

        </div >
    )
}

export default resume1;