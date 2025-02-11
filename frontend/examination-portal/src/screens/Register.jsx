import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDegree, getSpecilization, onRegister, getSubjects } from "../services/faculty";
import { getCourse } from "../services/student";
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

    const [courseId, setCourseId] = useState('')
    const [subjectId, setSubjectId] = useState('')

    const [courses, setCourses] = useState([]);
    
    const [subjectsWithNullFaculty, setSub] = useState([]);


    async function loadData() {
        const d = await getDegree();
        const s = await getSpecilization();
        setDeg(d);
        setSpec(s);
        const c = await getCourse();
        setCourses(c);
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

        if (!subjectId) {
            toast.error("Please select a subject.");
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


        const reqBody = { fname: fName, lname: lName, mobNo, email, password, degree, specilization: specialization, subjectId };

        const res = await onRegister(reqBody);
        if (res.status == 1) {
            toast.success("registerion successfull...!")
            navigate("/login")
        }
        else {
            toast.error("registerion failed...!")
        }

    };

    const handleCourseChange = async (e) => {
        const selectedCourseId = e.target.value;
        setCourseId(selectedCourseId);
        const subjects = await getSubjects(selectedCourseId);
        const s = subjects.filter(subject => subject.faculty === null);
        setSub(s)
    }

    return (
        <div className="register-container">
            <div className="form-box">
                <h2 className="header">Faculty Register</h2>
                <div className="row">
                    <div className="col">
                        <Link to="/registerstudent" className="btn btn-primary ms-5">For Student Registration</Link>
                    </div>
                    <div className="col">
                        <Link to="/register" className="ms-5 btn btn-primary">For Faculty Registration</Link>
                    </div>
                </div>
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
                        onChange={e => setDegree(e.target.value)}>
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
                        onChange={e => setSpecialization(e.target.value)}
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
                    <label htmlFor="course">Course</label>
                    <select id="course" className="form-select" value={courseId}
                        onChange={handleCourseChange}>
                        <option value="">Select Course</option>
                        {courses.map((opt, index) => (
                            <option key={index} value={opt.id}>
                                {opt.courseName}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="row mb-3">
                    <label htmlFor="course">Subject</label>
                    <select id="course" className="form-select" value={subjectId}
                        onChange={e => setSubjectId(e.target.value)}>
                        <option value="">Select Subject</option>
                        {subjectsWithNullFaculty.map((opt, index) => (
                            <option key={index} value={opt.id}>
                                {opt.title}
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
