import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDegree, getSpecilization, onRegister } from "../services/faculty";
import '../styles/register.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();

    const [fName, setFirstName] = useState('');
    const [lName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [mobNo, setPhone] = useState('');
    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')

    const [deg, setDeg] = useState([]);
    const [spec, setSpec] = useState([]);

    async function loadData() {
        const d = await getDegree();
        const s = await getSpecilization();
        setDeg(d);
        setSpec(s);
    }

    useEffect(() => {
        loadData();
    }, []);

    const onSubmit = async () => {
        if (!fName.trim()) {
            toast.error("First name is required.");
            return;
        }
        
        if (!lName.trim()) {
            toast.error("Last name is required.");
            return;
        }
    
        
        const phoneRegex = /^[0-9]{10}$/;
        if (!mobNo.trim()) {
            toast.error("Phone number is required.");
            return;
        } else if (!phoneRegex.test(mobNo)) {
            toast.error("Invalid phone number. Must be 10 digits.");
            return;
        }
        
        if (!degree) {
            toast.error("Please select a degree.");
            return;
        }
    
        if (!specialization) {
            toast.error("Please select a specialization.");
            return;
        }

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
    
        if (!repPassword.trim()) {
            toast.error("Repeat password is required.");
            return;
        } else if (repPassword !== password) {
            toast.error("Passwords do not match.");
            return;
        }
    
            
        const reqBody = { fname: fName, lname: lName, mobNo, email, password, degree, specilization: specialization };

        const res = await onRegister(reqBody);
        if(res.status == 1) {
            toast.success("registerion successfull...!")
            navigate(-1)
        }
        else{
            toast.error("registerion failed...!")
        }

    };

    return (
        <div className="register-container">
            <div className="form-box">
                <h2 className="header">Register</h2>
                <div className="row mb-3">
                    <div className="col m-0">
                        <label htmlFor="fName">First Name</label>
                        <input
                            id="fName"
                            type="text"
                            className="form-control"
                            placeholder="Enter your first name"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="col m-0">
                        <label htmlFor="lName">Last Name</label>
                        <input
                            id="lName"
                            type="text"
                            className="form-control"
                            placeholder="Enter your last name"
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="mobNo">Phone Number</label>
                    <input
                        id="mobNo"
                        type="tel"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>

                <div className="row mb-3">
                    <label htmlFor="degree">Degree</label>
                    <select id="degree" className="form-select" value={degree}
                    onChange={e=>setDegree(e.target.value)}>
                        <option value="">Select Degree</option>
                        {deg.map((opt, index) => (
                            <option key={index} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="row mb-3">
                    <label htmlFor="specs">Specialization</label>
                    <select id="specs" className="form-select" value={specialization} 
                        onChange={e=>setSpecialization(e.target.value)}
                    >
                        <option value="">Select Specialization</option>
                        {spec.map((opt, index) => (
                            <option key={index} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="row mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        id="repeatPassword"
                        type="password"
                        className="form-control"
                        placeholder="Repeat your password"
                        onChange={e => setRepPassword(e.target.value)}
                    />
                </div>
                <div className="row mb-3 inbl">
                    Already have an account? <Link to="/Login">Login Here</Link>
                </div>
                <div className="row mb-3">
                    <button onClick={onSubmit} className="btn btn-success form-button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
