import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBarStudent() {

    const [ student, setStudent ] = useState('')

    useEffect(()=>{
        const s = JSON.parse(sessionStorage.getItem('student'))
        setStudent(s.fname)
    }, [])

    function sess() {
        sessionStorage.clear()
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Examination Portal</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse justify-content-center">
                <span className="navbar-text font-weight-bold">
                    Welcome {student || ""}
                </span>
            </div>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link className="nav-item nav-link mx-3" to="/profile">Profile</Link>
                    <Link onClick={sess} className="nav-item nav-link mx-3" to="/">Logout</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBarStudent;