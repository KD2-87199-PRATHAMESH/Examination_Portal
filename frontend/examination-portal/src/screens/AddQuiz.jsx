import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addQuiz } from "../services/quiz";  // Assuming addQuiz is the function to add a quiz
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AddQuiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const { subjectId } = location.state || {};  // Get the subjectId passed from FacultyHome

    const [quizData, setQuizData] = useState({
        title: "",
        marksPerQue: "",
        noQ: "",
        pass: ""
    });

    function handleChange(e) {
        setQuizData({ ...quizData, [e.target.name]: e.target.value });
    }

    function validateInputs() {
        if (quizData.marksPerQue < 1) {
            toast.warn("Marks per question must be greater than 1");
            return false;
        }
        if (quizData.noQ <= 1) {
            toast.warn("Number of questions must be greater than 1");
            return false;
        }
        if (quizData.pass < 1 || quizData.pass > (quizData.noQ * quizData.marksPerQue) - 1) {
            toast.warn("Passing marks must be valid");
            return false;
        }
        return true;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateInputs()) return;

        await addQuiz({
            subId: subjectId, // Include subjectId here
            marksPerQue: quizData.marksPerQue,
            passMarks: quizData.pass,
            noOfQuestions: quizData.noQ,
            qtitle: quizData.title
        });

        navigate("/facultyhome");
    }

    return (
        <div className="container">
            <h2>Add Quiz</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={quizData.title} onChange={handleChange} className="form-control" />

                <label>Marks per Question:</label>
                <input type="number" name="marksPerQue" value={quizData.marksPerQue} onChange={handleChange} className="form-control" />

                <label>Number of Questions:</label>
                <input type="number" name="noQ" value={quizData.noQ} onChange={handleChange} className="form-control" />

                <label>Passing Marks:</label>
                <input type="number" name="pass" value={quizData.pass} onChange={handleChange} className="form-control" />

                <button type="submit" className="btn btn-success mt-3">Add Quiz</button>
                <Link className="btn btn-danger" to="/facultyhome">Cancel</Link>
            </form>
        </div>
    );
}

export default AddQuiz;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addQuiz } from "../services/quiz";  // Assuming addQuiz is the function to add a quiz
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

// function AddQuiz() {
//     const navigate = useNavigate();

//     const [quizData, setQuizData] = useState({
//         title: "",
//         marksPerQue: "",
//         noQ: "",
//         pass: ""
//     });

//     function handleChange(e) {
//         setQuizData({ ...quizData, [e.target.name]: e.target.value });
//     }

//     function validateInputs() {
//         if (quizData.marksPerQue < 1) {
//             toast.warn("Marks per question must be greater than 1");
//             return false;
//         }
//         if (quizData.noQ <= 1) {
//             toast.warn("Number of questions must be greater than 1");
//             return false;
//         }
//         if (quizData.pass < 1 || quizData.pass > (quizData.noQ * quizData.marksPerQue) - 1) {
//             toast.warn("Passing marks must be valid");
//             return false;
//         }
//         return true;
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         if (!validateInputs()) return;

//         await addQuiz({
//             marksPerQue: quizData.marksPerQue,
//             passMarks: quizData.pass,
//             noOfQuestions: quizData.noQ,
//             qtitle: quizData.title
//         });

//         navigate("/facultyhome");
//     }

//     return (
//         <div className="container">
//             <h2>Add Quiz</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Title:</label>
//                 <input type="text" name="title" value={quizData.title} onChange={handleChange} className="form-control" />

//                 <label>Marks per Question:</label>
//                 <input type="number" name="marksPerQue" value={quizData.marksPerQue} onChange={handleChange} className="form-control" />

//                 <label>Number of Questions:</label>
//                 <input type="number" name="noQ" value={quizData.noQ} onChange={handleChange} className="form-control" />

//                 <label>Passing Marks:</label>
//                 <input type="number" name="pass" value={quizData.pass} onChange={handleChange} className="form-control" />

//                 <button type="submit" className="btn btn-success mt-3">Add Quiz</button>
//                 <Link className="btn btn-danger" to="/facultyhome">Cancel</Link>
//             </form>
//         </div>
//     );
// }

// export default AddQuiz;
