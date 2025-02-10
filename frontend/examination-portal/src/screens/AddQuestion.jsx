import Question from "../Components/Question";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { findQuestionByQuizId } from "../services/quiz";
import { Link } from "react-router-dom";

function AddQuestion() {
    const location = useLocation();
    const { id, noQ } = location.state || {};

    const [noOfQuestions, setNoOfQuestions] = useState('');
    const [quizId, setQuizId] = useState('');
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (id && noQ) {
            setQuizId(id);
            setNoOfQuestions(noQ);
        }
        loadQuestions(id);
    }, [id, noQ]);

    async function loadQuestions(quizId) {
        const q = await findQuestionByQuizId(quizId);
        const remain = noQ - q.length;

        for (let index = 0; index < remain; index++) {
            q.push({
                id: null,
                content: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                answer: "",
            })
        }

        setQuestions(q)
    }

    return (
        <div>
            <h2>Add Questions</h2>
            {questions.map((ques, index) => (
                <Question
                    index={index}
                    id={ques.id}
                    content={ques.content}
                    option1={ques.option1}
                    option2={ques.option2}
                    option3={ques.option3}
                    option4={ques.option4}
                    answer={ques.answer}
                    quizId={quizId}
                />
            ))}
            <Link to="/facultyhome" className="btn btn-danger ms-3">Cancel</Link>
        </div>
    );
}

export default AddQuestion;