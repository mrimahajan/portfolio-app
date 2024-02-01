const Resume = () => {
  return (
    <>
      <main id="main">
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                Please find my resume below. I hope it gives you a glimpse of my
                work profile.
              </p>
            </div>

            <div className="row" style={{ overflow: "auto" }}>
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Mrinal Mahajan</h4>
                  <p>
                    <em>
                      Innovative analytics professional with 6+ years experience
                      across multiple domains including credit and fraud risk,
                      portfolio management, merchant analytics and customer
                      experience enhancement. I have done my graduation from IIT
                      Kanpur. Besides analytics I have also pursued my interest
                      in finance and web development through recognized
                      certifications and skills enhancement. I have lead several
                      projects leveraging data assets and helping stakeholders
                      with data driven decision making.
                    </em>
                  </p>
                  <ul>
                    <li>Location: Gurgaon,Haryana</li>
                    <li>MOB: 91-8448317895,91-9711309227</li>
                    <li>Email: mahajanmrinal2013@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>BTech, IIT Kanpur</h4>
                  <h5>2013- 2017</h5>
                  <p>
                    <em>Indian Institute of Technology, Kanpur</em>
                  </p>
                  <p>
                    I have dome majors in Mechanical Engineering and minor in
                    Industrial and Management Engineering.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Financial Risk Management</h4>
                  <h5>2018 - 2019</h5>
                  <p>
                    <em>Global Association of Risk Professionals, USA</em>
                  </p>
                  <p>
                    The certification is globally recognized and is equivalent
                    to Masters Degree in India and several other countries.
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Executive Program in Algorithmic Trading (EPAT)</h4>
                  <h5>2020 - 2021</h5>
                  <p>
                    <em>Quantinsti, India</em>
                  </p>
                  <p>
                    Received award for best project of the batch during the
                    course. You can find the link for project <s />
                    <a href="https://blog.quantinsti.com/dynamic-asset-allocation-neural-networks-project-mrinal-mahajan/">
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Associate Managing Consultant</h4>
                  <h5>Sep'22 - Present</h5>
                  <p>
                    <em>Mastercard, Gurgaon,Haryana </em>
                  </p>
                  <ul>
                    <li>
                      Lead the development of credit risk scoring models based
                      on Mastercard transaction data as an in house alternate to
                      an existing model product requiring data inputs from
                      banking clientele.
                    </li>
                    <li>
                      Lead development of Global Income Percentile prediction
                      model.
                    </li>
                    <li>
                      Credit Card portfolio management for banks across Middle
                      East and Asia Pacific regions. Some of the banks include
                      FAB -UAE, CIMB - Malaysia and PBB - Malaysia.
                    </li>
                    <li>
                      Lead the client pitches for cross sell of Mastercard
                      Intelligence Centre (MIC) modules for banks in Middle East
                      and Africa.
                    </li>
                    <li>
                      Lead the market entry analysis in Europe and LAC region
                      for Luxury Cards, a premium credit card provider in USA
                      and Japan.
                    </li>
                    <li>
                      Lead multiple merchant analytics projects which includes
                      brands such as Ampol-Australia, Uber-Taiwan and
                      Decathlon-Poland.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Consultant</h4>
                  <h5>May'21 - Aug'22</h5>
                  <p>
                    <em>Mastercard, Gurgaon,Haryana</em>
                  </p>
                  <ul>
                    <li>
                      Database and Frontend development of multiple products
                      including Mastercard Credit risk dashboard, Russia MEI
                      platform and Digital Revenue Accelerator Platform
                    </li>
                    <li>
                      Lead analyst on several Loyalty Rewards initiative
                      including Mastercard Everyday Value - Mexico, Takashimaya
                      Mall - Singapore and SMAC - Philippines.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Business Analyst</h4>
                  <h5>Oct'18-Apr'21</h5>
                  <p>
                    <em>American Express, Gurgaon,Haryana</em>
                  </p>
                  <ul>
                    <li>
                      Development of channel models to prevent account take over
                      fraud on credit card transactions. Received recognition
                      for developing first ever account takeover fraud detection
                      framework for the bank.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Consultant</h4>
                  <h5>Aug'17-Oct'18</h5>
                  <p>
                    <em>EXL Services, Gurgaon,Haryana</em>
                  </p>
                  <ul>
                    <li>
                      Portfolio analytics for asset management and retail
                      banking accounts of one of the largest US Bank Pittsburgh
                      National Corporation (PNC).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;
