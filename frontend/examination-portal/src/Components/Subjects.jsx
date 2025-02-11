import { useEffect, useState } from "react";
import { findBySubjectId } from "../services/quiz";
import QuizTest from "./QuizTest";
import { useNavigate } from "react-router-dom";

function Subjects({ id, title }) {
    const [quiz, setQuiz] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    async function loadData() {
        const quizes = await findBySubjectId(id);
        setQuiz(quizes);
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            loadData();
        }
    }, [id]);

    useEffect(() => {
        if (selectedQuiz) {
            navigate("/quizInstr", { state: { quizId: selectedQuiz } });
        }
    }, [selectedQuiz, navigate]);

    // if (selectedQuiz) {
    //     return <QuizTest quizId={selectedQuiz} />;
    //     navigate("/quizInstr", { state: { quizId: selectedQuiz } });
    // }

    return (
        <div>
            {quiz.length === 0 && <div>There is no quiz available</div>}
            {quiz.map((q) => (
                <div
                    key={q.id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        margin: "5px 0",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                        fontSize: "16px"
                    }}
                >
                    <span>{q.qtitle}</span>
                    <button
                        onClick={() => setSelectedQuiz(q.id)}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Take Test
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Subjects;