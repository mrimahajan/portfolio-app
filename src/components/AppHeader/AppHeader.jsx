import route from "../../routes/route.json";
const AppHeader = () => {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Mrinal Mahajan</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://www.linkedin.com/in/mrinall-mahajan-95a98aa3/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/mrimahajan" className="github">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href={route.HOME} className="nav-link scrollto">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href={route.ABOUT} className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href={route.RESUME} className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href={route.PORTFOLIO} className="nav-link scrollto">
                  <i className="bx bx-book-content"></i>{" "}
                  <span>Web Development Projects</span>
                </a>
              </li>
              <li>
                <a href={route.CONTACT_US} className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
