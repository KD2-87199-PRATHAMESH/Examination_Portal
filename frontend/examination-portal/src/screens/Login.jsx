import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginStudent } from "../services/student";
import { loginFaculty } from "../services/faculty";
import { loginAdmin } from "../services/Admin";
import { useNavigate } from "react-router-dom";

function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    async function onSubmit() {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format.");
            return;
        }

        if (!password.trim()) {
            toast.error("Password is required.");
            return;
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        if (!role) {
            toast.error("Please select a role.");
            return;
        }

        if (role == 1) {
            const reqBody = { email, password };

            const res = await loginStudent(reqBody);

            if (res.status == true) {
                sessionStorage.setItem("student", JSON.stringify(res));
                toast.success("login successfull...!")
                navigate("/home")
            }
            else {
                toast.error("invalid credentials try again...!")
            }

        }
        else if (role == 2) {

            const reqBody = { email, password };

            const res = await loginFaculty(reqBody);
            if (res.status == true) {
                sessionStorage.setItem("faculty", JSON.stringify(res));
                toast.success("login successfull...!")
                navigate("/facultyhome")
            }
            else {
                toast.error("invalid credentials try again...!")
            }
        }

        else if (role == 3) {

            const reqBody = { email, password };

            const res = await loginAdmin(reqBody);
            if (res.status == true) {
                sessionStorage.setItem("admin", JSON.stringify(res));
                toast.success("login successfull...!")
                navigate("/adminhome")
            }
            else {
                toast.error("invalid credentials try again...!")
            }
        }
      

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

                <select
                    className="form-select mb-3"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                >
                    <option value="">Select Role</option>
                    <option value="1">Student</option>
                    <option value="2">Faculty</option>
                    <option value="3">Admin</option>
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
