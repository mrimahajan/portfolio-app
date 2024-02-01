const Portfolio = () => {
  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Web Development Projects</h2>
              <p>Below are some of my web development projects.</p>
            </div>

            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      title="App 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="https://newmegastorebymrinal.netlify.app/"
                      title="More Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="http://mrinallm2023.pythonanywhere.com/"
                      title="More Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="https://chat-app-qdc4.onrender.com/"
                      title="More Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="https://user-app-7kf4.onrender.com/"
                      title="More Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
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

export default Portfolio;
