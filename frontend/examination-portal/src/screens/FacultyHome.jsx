import { useEffect, useState } from "react";
import NavBarFaculty from "./NavBarFaculty";
import { getFacultySubject } from "../services/faculty";
import { findBySubjectId } from "../services/quiz";
import { Link } from "react-router-dom";
import QuizRow from "./QuizRow";

function FacultyHome() {

    const [facultyId, setFacultyId] = useState('')
    const [subjectName, setsubjectName] = useState('')
    const [subjectId, setSubjectId] = useState('')
    const [quizes, setQuizes] = useState([])

    async function loadData() {
        const subject = await getFacultySubject(facultyId);
        setsubjectName(subject.title)
        setSubjectId(subject.id)
    }

    useEffect(() => {
        setFacultyId(JSON.parse(sessionStorage.getItem("faculty")).id);
    }, []);

    useEffect(() => {
        if (facultyId) {
            loadData();
        }
    }, [facultyId]);

    useEffect(() => {
        if (subjectId) {
            loadQuizes()
        }
    }, [subjectId]);

    async function loadQuizes() {
        const q = await findBySubjectId(subjectId);
        setQuizes(q)
    }

    return (
        <div>
            <NavBarFaculty subject={subjectName} />
            <Link to="/addQuiz" className="mt-3 btn btn-success">Add Quiz</Link>
            {quizes.length == 0 && (
                <div className="mt-3"><h6>Please add quiz by clicking on Add Quiz button</h6></div>
            )}

            {quizes.length > 0 && (
                <table className="mt-3 table-hover table mt-3">
                    <thead>
                        <tr>
                            <th>Titles</th>
                            <th>Marks Per Que</th>
                            <th>No of Questions</th>
                            <th>Pass Marks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quizes.map(category => {
                            return <QuizRow
                                id={category['id']}
                                title={category['qtitle']}
                                marksPerQue={category['marksPerQue']}
                                noQ={category['noOfQuestions']}
                                pass={category['passMarks']}
                                onDelete={loadQuizes} />
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default FacultyHome;