import NavBarFaculty from "./NavBarFaculty";
import { useState, useEffect } from "react";
import { getDegree, getSpecilization, updateFaculty } from "../services/faculty";

function FacultyProfile() {

    // {"id":2,"email":"p@gmail.com","password":"pppppppp","mobNo":"9999999999","degree":"MTECH","specilization":"DEVOPS","status":true,"lname":"rwerwer","fname":"dwqerwer"}

    const [id, setId] = useState('');
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [mobNo, setPhone] = useState('');

    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')

    const [deg, setDeg] = useState([]);
    const [spec, setSpec] = useState([]);

    const [isEditing, setIsEditing] = useState(false);

    async function loadData() {
        const d = await getDegree();
        const s = await getSpecilization();
        setDeg(d);
        setSpec(s);
        const data = sessionStorage.getItem("faculty");
        const faculty = JSON.parse(data);
        setId(faculty.id)
        setFirstName(faculty.fname)
        setLastName(faculty.lname)
        setDegree(faculty.degree)
        setSpecialization(faculty.specilization)
        setPhone(faculty.mobNo)
    }

    const handleSubmit = async () => {
        // {
        //     "id": 0,
        //     "mobNo": "string",
        //     "degree": "BTECH",
        //     "specilization": "CSE",
        //     "lname": "string",
        //     "fname": "string"
        //   }
        const reqBody = { id, fname, lname, mobNo, degree, specilization: specialization };
        const res = await updateFaculty(reqBody);
        sessionStorage.setItem("faculty", JSON.stringify(res))
        loadData()
        setIsEditing(false);
    };


    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <NavBarFaculty />
            <div className="container mt-4">
                <h2>Profile</h2>
                <div className="card p-4">
                    <div className="mb-3">
                        <strong>First Name:</strong> {isEditing ? (
                            <input
                                type="text"
                                className="form-control"
                                value={fname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        ) : (
                            <span> {fname}</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <strong>Last Name:</strong> {isEditing ? (
                            <input
                                type="text"
                                className="form-control"
                                value={lname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        ) : (
                            <span> {lname}</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <strong>Phone Number:</strong> {isEditing ? (
                            <input
                                type="tel"
                                className="form-control"
                                value={mobNo}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        ) : (
                            <span> {mobNo}</span>
                        )}
                    </div>

                    <div className="mb-3">
                        <strong>Degree:</strong> {isEditing ? (
                            <select
                                className="form-select"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            >
                                <option value="">Select Degree</option>
                                {deg.map((opt) => (
                                    <option key={opt.id} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <span>
                                {degree}
                            </span>
                        )}
                    </div>

                    <div className="mb-3">
                        <strong>Specialization:</strong> {isEditing ? (
                            <select
                                className="form-select"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                            >
                                <option value="">Select Specialization</option>
                                {spec.map((opt) => (
                                    <option key={opt.id} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <span>
                                {specialization}
                            </span>
                        )}
                    </div>

                    <div className="mt-3">
                        {isEditing ? (
                            <button className="btn btn-success me-2" onClick={handleSubmit}>
                                Submit
                            </button>
                        ) : (
                            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                                Edit
                            </button>
                        )}
                    </div>


                </div>
            </div>

        </div>
    );
}

export default FacultyProfile;