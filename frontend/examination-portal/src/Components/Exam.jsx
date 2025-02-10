import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Exam() {
    const location = useLocation();
    const navigate = useNavigate();
    const { quizz, quess } = location.state || {};

    const totalTime = quizz?.noOfQuestions * 60 || 0;
    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [answers, setAnswers] = useState({});
    const [timerExpired, setTimerExpired] = useState(false);
    const totalQuestions = quess?.length || 0;

    const marksPerQuestion = parseInt(quizz?.marksPerQue || 1);
    const passMarks = parseInt(quizz?.passMarks || 9);
    const totalMarks = marksPerQuestion * totalQuestions;

    useEffect(() => {
        if (!quizz || !quess) {
            navigate('/home');
        }
    }, [quizz, quess, navigate]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setTimerExpired(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOptionChange = (qNo, selectedOption) => {
        setAnswers((prev) => ({ ...prev, [qNo]: selectedOption }));
    };

    const attemptedQuestions = Object.keys(answers).length;

    const handleSubmit = () => {
        let obtainedMarks = 0;

        quess?.forEach((question, index) => {
            if (answers[index + 1] === question.answer) {
                obtainedMarks += marksPerQuestion;
            }
        });

        const accuracy = ((obtainedMarks / totalMarks) * 100).toFixed(2);
        const isPassed = obtainedMarks >= passMarks;

        alert(`Test Submitted Successfully!\nObtained Marks: ${obtainedMarks}/${totalMarks}\nAccuracy: ${accuracy}%\nStatus: ${isPassed ? 'Passed' : 'Failed'}`);

        navigate('/home');
    };

    useEffect(() => {
        if (timerExpired) {
            handleSubmit();
        }
    }, [timerExpired]);

    // Scroll to a specific question
    const scrollToQuestion = (index) => {
        const questionElement = document.getElementById(`question-${index}`);
        if (questionElement) {
            questionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={styles.pageContainer}>
            {/* Sidebar Navigation */}
            <div style={styles.sidebar}>
                <h3 style={styles.sidebarTitle}>Questions</h3>
                <ul style={styles.questionList}>
                    {quess?.map((_, index) => (
                        <li
                            key={index}
                            style={styles.questionItem}
                            onClick={() => scrollToQuestion(index + 1)}
                        >
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={styles.mainContent}>
                <nav style={styles.navbar}>
                    <h2 style={styles.quizTitle}>{quizz?.qtitle || 'Loading...'}</h2>
                    <p style={styles.counter}>Total: {totalQuestions} | Attempted: {attemptedQuestions}</p>
                    <p style={styles.timer}>
                        Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </p>
                </nav>

                <div style={styles.container}>
                    {quess?.map((question, index) => (
                        <div
                            id={`question-${index + 1}`}
                            key={question.id}
                            style={styles.questionCard}
                        >
                            <h3 style={styles.questionText}>
                                {index + 1}. {question.content}
                            </h3>
                            <div style={styles.options}>
                                {['option1', 'option2', 'option3', 'option4'].map((optionKey) => (
                                    <label key={optionKey} style={styles.optionLabel}>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={question[optionKey]}
                                            checked={answers[index + 1] === question[optionKey]}
                                            onChange={() => handleOptionChange(index + 1, question[optionKey])}
                                            style={styles.radioButton}
                                        />
                                        <span style={styles.optionText}>{question[optionKey]}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button onClick={handleSubmit} style={styles.submitButton} disabled={timerExpired}>
                        {timerExpired ? "Time's Up! Submitting..." : "Submit Test"}
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: 'flex',
    },
    sidebar: {
        width: '200px',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '#f4f4f4',
        paddingTop: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRight: '2px solid #ccc',
        fontSize: '16px',
    },
    sidebarTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '15px',
    },
    questionList: {
        listStyleType: 'none',
        padding: 0,
    },
    questionItem: {
        cursor: 'pointer',
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
        fontSize: '16px',
    },
    mainContent: {
        marginLeft: '220px', // To make space for the sidebar
        padding: '20px',
        flex: 1,
    },
    navbar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007bff',
        color: 'white',
        padding: '15px 20px',
        fontSize: '18px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    quizTitle: {
        margin: 0,
        fontSize: '20px',
    },
    counter: {
        margin: 0,
        fontSize: '16px',
        fontWeight: 'bold',
    },
    timer: {
        margin: 0,
        fontWeight: 'bold',
        fontSize: '14px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px',
        padding: '20px',
    },
    questionCard: {
        width: '80%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '15px',
        backgroundColor: '#f9f9f9',
    },
    questionText: {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    options: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    optionLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    radioButton: {
        width: '16px',
        height: '16px',
    },
    optionText: {
        fontSize: '16px',
    },
    submitButton: {
        marginTop: '20px',
        padding: '12px 24px',
        fontSize: '18px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Exam;
