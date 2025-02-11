import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getQuizByTitleId, getQuizById } from '../services/quiz';
import { Link } from 'react-router-dom';


function QuizTest() {
    const location = useLocation();
    const { quizId } = location.state || {}

    const [quizz, setQuiz] = useState('');
    const [quess, setQues] = useState('');

    async function loadData() {
        const quiz = await getQuizByTitleId(quizId);
        setQuiz(quiz);
        const ques = await getQuizById(quizId);
        setQues(ques);
    }

    useEffect(() => {
        loadData();
    }, [quizId]);


    const totalTime = quizz?.noOfQuestions * 1;
    const marksPerQuestion = quizz?.marksPerQue;
    const passMarks = quizz?.passMarks;

    const navigate = useNavigate()

    function navigateTo() {
        navigate('/exam', { state: { quizz, quess } });
    }
    
    return (
        <div style={styles.container}>
            <div style={styles.quizInfo}>
                <h2 style={styles.title}>Quiz: {quizz?.qtitle}</h2>
                <p>Total Time: {totalTime} minutes</p>
                <p>Marks per Question: {marksPerQuestion}</p>
                <p>No Negative Marking</p>
                <p>Passing Marks: {passMarks}</p>
                <p>Total Marks: {marksPerQuestion * totalTime}</p>
            </div>
            <div>
                <button className='btn btn-primary me-2' onClick={navigateTo}>
                    Start Exam
                </button>
                <Link to="/home" className='btn btn-danger'>Cancel</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    quizInfo: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
};

export default QuizTest;
