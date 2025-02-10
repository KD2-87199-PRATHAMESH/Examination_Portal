import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { findQuestionByQuizId } from "../services/quiz";
import Question from "../Components/Question";

function AddQuestion() {
    const location = useLocation();
    const { id: quizId, noQue } = location.state || {};
    
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (quizId && noQue) loadQuestions();
    }, [quizId, noQue]);

    async function loadQuestions() {
        const existingQuestions = await findQuestionByQuizId(quizId);
        const remaining = noQue - existingQuestions.length;
        
        setQuestions([
            ...existingQuestions,
            ...Array.from({ length: remaining }, () => ({
                id: null, content: "", option1: "", option2: "", option3: "", option4: "", answer: ""
            }))
        ]);
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
            <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-2xl text-white border border-white/20">
                <h2 className="text-3xl font-bold text-center mb-6">📝 Add Questions</h2>
                <div className="space-y-6">
                    {questions.map((ques, index) => (
                        <Question key={index} index={index} {...ques} quizId={quizId} />
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <Link to="/facultyhome" className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-200">
                        ❌ Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AddQuestion;
