import { useState } from "react";
import { getCourse } from "../services/student";
import NavBarStudent from "./NavBarStudent";
import { useEffect } from "react";
import { updateStudent } from "../services/student";

function Profile() {

    const [id, setId] = useState('');
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');
    const [mobNo, setPhone] = useState('');
    const [courseId, setCourseId] = useState('');

    const [courses, setCourses] = useState([]);

    const [isEditing, setIsEditing] = useState(false);


    const handleSubmit = async () => {
        const reqBody = { id, fname, lname, mobNo, selectedCourse: courseId }
        const student = await updateStudent(reqBody);
        sessionStorage.setItem("student", JSON.stringify(student));
        setCourseId(student.selectedCourse.id)
        setIsEditing(false);
    };

    async function loadCourses() {
        const c = await getCourse();
        setCourses(c);
    }

    function loadData() {
        const data = sessionStorage.getItem("student");
        const student = JSON.parse(data);
        setId(student.id)
        setFirstName(student.fname)
        setLastName(student.lname)
        setPhone(student.mobNo)
        setCourseId(student.selectedCourse.id)
        loadCourses();
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <NavBarStudent />
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
                        <strong>Course:</strong> {isEditing ? (
                            <select
                                className="form-select"
                                value={courseId}
                                onChange={(e) => setCourseId(e.target.value)}
                            >
                                <option value="">Select Course</option>
                                {courses.map((opt) => (
                                    <option key={opt.id} value={opt.id}>
                                        {opt.courseName}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <span>
                                {courses.find((course) => course.id === courseId)?.courseName || "Not Selected"}
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

export default Profile;