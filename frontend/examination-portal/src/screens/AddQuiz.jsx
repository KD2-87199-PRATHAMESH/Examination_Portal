import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addQuiz } from "../services/quiz";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AddQuiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const { subjectId } = location.state || {};

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
            subId: subjectId,
            marksPerQue: quizData.marksPerQue,
            passMarks: quizData.pass,
            noOfQuestions: quizData.noQ,
            qtitle: quizData.title
        });

        navigate("/facultyhome");
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
            <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md text-white border border-white/20">
                <h2 className="text-3xl font-bold text-center mb-6">✨ Add New Quiz</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div>
                        <label className="block text-lg font-medium">Quiz Title:</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={quizData.title} 
                            onChange={handleChange} 
                            className="w-full p-3 border border-white/30 rounded-lg bg-white/20 focus:ring-2 focus:ring-blue-300 placeholder-gray-300 text-white"
                            placeholder="Enter quiz title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium">Marks per Question:</label>
                        <input 
                            type="number" 
                            name="marksPerQue" 
                            value={quizData.marksPerQue} 
                            onChange={handleChange} 
                            className="w-full p-3 border border-white/30 rounded-lg bg-white/20 focus:ring-2 focus:ring-blue-300 placeholder-gray-300 text-white"
                            placeholder="Enter marks per question"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium">Number of Questions:</label>
                        <input 
                            type="number" 
                            name="noQ" 
                            value={quizData.noQ} 
                            onChange={handleChange} 
                            className="w-full p-3 border border-white/30 rounded-lg bg-white/20 focus:ring-2 focus:ring-blue-300 placeholder-gray-300 text-white"
                            placeholder="Enter number of questions"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium">Passing Marks:</label>
                        <input 
                            type="number" 
                            name="pass" 
                            value={quizData.pass} 
                            onChange={handleChange} 
                            className="w-full p-3 border border-white/30 rounded-lg bg-white/20 focus:ring-2 focus:ring-blue-300 placeholder-gray-300 text-white"
                            placeholder="Enter passing marks"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center mt-5">
                        <button 
                            type="submit" 
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
                        >
                            ✅ Add Quiz
                        </button>
                        <Link 
                            to="/facultyhome" 
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
                        >
                            ❌ Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddQuiz;
