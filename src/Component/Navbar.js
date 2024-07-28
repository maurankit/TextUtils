// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {props.textutil} <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="$">
               Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              About us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className={`form-check form-switch text-${props.mode==="light"? "dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark mode</label>
</div>   
      </nav>
    
    </>
  );
}