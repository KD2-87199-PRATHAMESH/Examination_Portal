import React from "react";
import { Link } from "react-router-dom";

function NavBarFaculty({ subject }) {

    function sess() {
        sessionStorage.clear()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Examination Portal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center">
                <span className="navbar-text font-weight-bold">
                    {subject || ""}
                </span>
            </div>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link mx-3" to="/profilefaculty">Profile</Link>
                    <Link onClick={sess} className="nav-item nav-link mx-3" to="/">Logout</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBarFaculty;
