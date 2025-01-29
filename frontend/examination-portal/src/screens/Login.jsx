import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/login.css'; // Import the CSS file

function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function onSubmit() {
        // Add your login logic here
    }

    return (
        <div className="center-container">
            <div className="login-box">
                <h2 className="header">Login</h2>
                <div className="row mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="form-control"
                        type="text"
                        placeholder="Enter your email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                        placeholder="Enter your password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <select className="form-select mb-3" aria-label="Default select example">
                    <option defaultValue>Select Role</option>
                    <option value="1">Student</option>
                    <option value="2">Faculty</option>
                </select>
                <div className="row mb-3 inbl">
                    Don’t have an account? <Link to="/register">Register Here</Link>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
