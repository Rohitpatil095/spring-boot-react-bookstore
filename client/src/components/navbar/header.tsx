export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  main-color py-3">
        <div className="container-fluid">
          <span className="navbar-brand">Book Bhandar</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropDown"
            aria-controls="navbarNavDropDown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropDown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search Book
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-1">
                <a type="button" className="btn btn-outline-light" href="#">Sign in</a>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};
