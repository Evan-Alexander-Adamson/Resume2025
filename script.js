const Resume = () => {
    return (
        <div className="container-fluid px-0">
            <div className="container-fluid resume-container">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="header-section">
                            <div className="headshot-container">
                                <img src="smallHeadshot.jpg" alt="Evan Adamson" className="headshot-image" />
                            </div>
                            <h1 className="display-4">Evan Adamson</h1>
                            <p className="lead">Front End Developer | Network Infrastructure | Motion Design Artist | Sound Engineer | E-commerce</p>
                            <div className="contact-info mt-3">
                                <p><i className="fas fa-location-dot me-2"></i>Oklahoma City, Oklahoma, United States</p>
                                <p><i className="fas fa-envelope me-2"></i>evan.alexander.adamson@gmail.com</p>
                                <p><i className="fab fa-linkedin me-2"></i><a href="https://www.linkedin.com/in/evan-adamson-94983322b" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                                <p><i className="fab fa-github me-2"></i><a href="https://github.com/Evan-Alexander-Adamson" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <h2 className="section-title">Top Skills</h2>
                        <div>
                            <div>
                                <span className="skill-tag">Front-End Development</span>
                                <span className="skill-tag">Network Infrastructure</span>
                                <span className="skill-tag">Post Training LLM Scaling</span>
                                <span className="skill-tag">Data Compliance & Security</span>
                            </div>
                            <div>
                                <span className="skill-tag secondary">Motion Design</span>
                                <span className="skill-tag secondary">Audio Production & Sound Design</span>
                                <span className="skill-tag secondary">Touch Typing (103 WPM)</span>
                            </div>
                        </div>

                        <h2 className="section-title mt-4">Experience</h2>
                        <div className="experience-card">
                            <h3>Front End Developer & Digital Administrator</h3>
                            <p>Scroggs Fencing | Sept 2024 - Present</p>
                            <ul>
                                <li>Designed and deployed a secure, high-performance landing page using <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, with automated CI/CD through <strong>GitHub Actions</strong>.</li>
                                <li>Managed <strong>secure API integrations</strong> and secrets handling, ensuring data protection using .gitignore and GitHub's encrypted secrets for public and private API keys.</li>
                                <li>Oversaw <strong>LinkedIn</strong>, <strong>Meta</strong>, and <strong>Email.js</strong> administration, handling account settings, security configurations, and platform integrations to maintain a professional online presence.</li>
                                <li>Applied <strong>best practices</strong> in data compliance & security, safeguarding sensitive credentials and optimizing digital workflows for scalability</li>
                            </ul>
                        </div>

                        <div className="experience-card">
                            <h3>AI Writing Evaluator (Tier 3)</h3>
                            <p>Outlier | Feb 2023 - Present</p>
                            <ul>
                                <li><strong>Post-Training Scaling</strong> – Conducted in-depth assessments across multiple AI projects, including vision training, text reformatting, policy compliance, and response grading. Evaluated LLM outputs for accuracy, coherence, and ethical alignment, contributing to model improvements for Meta, OpenAI, and confidential clients.</li>
                                <li><strong>Content & Policy Review</strong> – Used detailed rubrics to evaluate AI responses, selecting the best outputs and providing justifications with technical writing. Reviewed LLM / user chat logs, flagging sensitive topics while ensuring adherence to ethical guidelines.</li>
                            </ul>
                        </div>

                        <div className="experience-card">
                            <h3>Network Infrastructure Technician</h3>
                            <p>Ahu Consults | Feb 2022 - Feb 2023</p>
                            <ul>
                                <li>Specialized in <strong>low-voltage electrical</strong> work for <strong>restaurant POS</strong> system upgrades</li>
                                <li>Installed and configured <strong>Toast</strong> POS systems including network infrastructure</li>
                                <li>Implemented <strong>CAT6 network cabling</strong> following ANSI/TIA/EIA-568-B commercial standards and NEC guidelines</li>
                                <li>Ensured <strong>compliance with industry specifications</strong> for cable performance, termination methods, and proper separation from power lines</li>
                                <li>Deployed and configured <strong>Cisco Meraki Z4</strong> routers for cloud-managed POS endpoint connections</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <h2 className="section-title">Certifications</h2>
                        <ul className="certification-list">
                            <li className="certification-item">Cybersecurity Specialization (Google)</li>
                            <li className="certification-item">Responsive Web Design (FreeCodeCamp)</li>
                            <li className="certification-item">Data Structures & Algorithms with javascript</li>
                            <li className="certification-item">Front End Development Libraries</li>
                            <li className="certification-item">Data Visualization with D3</li>
                            <li className="certification-item">Computer Hardware Basics (Cisco)</li>
                            <li className="certification-item in-pursuit">Relational Databases (FreeCodeCamp)</li>
                            <li className="certification-item in-pursuit">Security+ (CompTIA)</li>
                        </ul>

                        <h2 className="section-title mt-4">Education</h2>
                        <div className="education-section">
                            <div className="mb-3">
                                <h3>The Culinary Institute of America</h3>
                                <p className="mb-1"><strong>Associate of Arts and Sciences (AAS)</strong></p>
                                <p className="mb-1"><em>Culinary Arts and Restaurant Management</em></p>
                                <p className="mb-1">September 2013 - October 2015</p>
                                <p>San Antonio, Texas</p>
                            </div>
                            <div>
                                <h3>University of Central Florida</h3>
                                <p className="mb-1"><strong>Associate of Arts (AA)</strong></p>
                                <p className="mb-1"><em>General Studies with focus in Graphic Design</em></p>
                                <p className="mb-1">July 2007 - December 2010</p>
                                <p>Orlando, Florida</p>
                            </div>
                        </div>

                        <div className="portfolio-section mt-4">
                            <p className="mb-0">View my creative portfolio: <a href="https://evan-alexander-adamson.github.io/creativePortfolio/" target="_blank" rel="noopener noreferrer">https://evan-alexander-adamson.github.io/creativePortfolio/</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<Resume />, document.getElementById('root')); 