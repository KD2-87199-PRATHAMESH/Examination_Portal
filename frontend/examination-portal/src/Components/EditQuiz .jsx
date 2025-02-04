import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateQuiz } from "../services/quiz"; // Function to update quiz

function EditQuiz() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id, title, marksPerQue, noQ, pass } = location.state || {};

    const [quizData, setQuizData] = useState({
        title: title || "",
        marksPerQue: marksPerQue || "",
        noQ: noQ || "",
        pass: pass || ""
    });

    function handleChange(e) {
        setQuizData({ ...quizData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const reqData = { 
            id, 
            marksPerQue: quizData.marksPerQue, 
            passMarks: quizData.pass, 
            noOfQuestions: quizData.noQ, 
            qtitle: quizData.title 
        };
    
        console.log("Updated Quiz Data:", reqData); // Debugging log
        
        const resp = await updateQuiz(reqData); 
        navigate("/facultyhome"); 
    }

    return (
        <div className="container">
            <h2>Edit Quiz</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={quizData.title} onChange={handleChange} className="form-control" />

                <label>Marks per Question:</label>
                <input type="text" name="marksPerQue" value={quizData.marksPerQue} onChange={handleChange} className="form-control" />

                <label>Number of Questions:</label>
                <input type="text" name="noQ" value={quizData.noQ} onChange={handleChange} className="form-control" />

                <label>Passing Marks:</label>
                <input type="text" name="pass" value={quizData.pass} onChange={handleChange} className="form-control" />

                <button type="submit" className="btn btn-success mt-3">Update Quiz</button>
            </form>
        </div>
    );
}

export default EditQuiz;
