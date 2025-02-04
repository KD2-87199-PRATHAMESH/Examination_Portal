import { useEffect, useState } from "react";

function AddQuestion() {
    const [noOfQuestions, setNoOfQuestions] = useState(10);
    const [quizId, setQuizId] = useState(1);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Initialize state with empty question data
        const initialQuestions = Array.from({ length: noOfQuestions }, (_, index) => ({
            id: index + 1,
            text: "",
            options: ["", "", "", ""],
            correctAnswer: "",
        }));
        setQuestions(initialQuestions);
    }, [noOfQuestions]);

    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].text = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (qIndex, optIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[optIndex] = value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (qIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].correctAnswer = value;
        setQuestions(updatedQuestions);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        {questions.map((_, index) => (
                            <a key={index} href={`#question-${index}`} className="list-group-item list-group-item-action">
                                Question {index + 1}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="col-md-9">
                    {questions.map((question, qIndex) => (
                        <div key={qIndex} id={`question-${qIndex}`} className="card mb-3">
                            <div className="card-header">Question {qIndex + 1}</div>
                            <div className="card-body">
                                {/* Question Input */}
                                <div className="mb-3">
                                    <label className="form-label">Enter Question:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={question.text}
                                        onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                                    />
                                </div>

                                {/* Options Inputs */}
                                <div className="row">
                                    {question.options.map((option, optIndex) => (
                                        <div className="col-md-6 mb-3" key={optIndex}>
                                            <label className="form-label">Option {optIndex + 1}:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={option}
                                                onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Correct Answer Selection */}
                                <div className="mb-3">
                                    <label className="form-label">Select Correct Answer:</label>
                                    <select
                                        className="form-select"
                                        value={question.correctAnswer}
                                        onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
                                    >
                                        <option value="">Choose...</option>
                                        {question.options.map((option, optIndex) => (
                                            <option key={optIndex} value={option}>
                                                {option || `Option ${optIndex + 1}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddQuestion;


// import { useEffect, useState } from "react";

// function AddQuestion() {

//     const [ noOfQuestions, setNoOfQuestions ] = useState('')
//     const [ quizId, setQuizId ] = useState('')

//     useEffect(() => {
//         setNoOfQuestions(10)
//         setQuizId(1)
//     }, []);

//     return ( 
//         <div>
                
//         </div>
//     );
// }

// export default AddQuestion;