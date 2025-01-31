import React from "react";
import { Link } from "react-router-dom";

function NavBarFaculty() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Examination Portal</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link className="nav-item nav-link mx-3" to="/profilefaculty">Profile</Link>
                    <a class="nav-item nav-link mx-3" href="#">Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBarFaculty;