const About = () => {
  return (
    <>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                I am an innovative analytics professional with 6+ years
                experience across multiple domains including credit and fraud
                risk, portfolio management, merchant analytics and customer
                experience enhancement. I have done my graduation from IIT
                Kanpur. Besides analytics I have also pursued my interest in
                finance and web development through recognized certifications
                and skills enhancement. I have lead several projects leveraging
                data assets and helping stakeholders with data driven decision
                making.
              </p>
            </div>

            <div
              className="row"
              style={{ marginRight: "200px", marginLeft: "50px" }}
            >
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Data Scientist &amp; Web Developer.</h3>
                <p className="fst-italic">Please find below my details</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>11 June 1994</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong>{" "}
                        <span>+91-9711309227, +91-8448317895</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Gurgaon,Haryana</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>29</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>BTech, IIT Kanpur</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>mahajanmrinal2013@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container">
            <div
              className="section-title"
              style={{ marginBottom: "0", paddingBottom: "0" }}
            >
              <h2>Skills</h2>
              <p style={{ marginBottom: "0", paddingBottom: "0" }}>
                Below are some of my relevant field of work and my percieved
                strength in the same.
              </p>
            </div>

            <div
              className="row skills-content"
              style={{ marginTop: "0", overflow: "auto", paddingTop: "0" }}
            >
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    Machine Learning <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Web Development <i className="val">40%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Finance <i className="val">60%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                  <span className="skill">
                    Consulting <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    People Management <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Risk management <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
