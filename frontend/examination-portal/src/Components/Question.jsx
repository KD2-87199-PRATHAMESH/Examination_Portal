import { useState } from "react";
import { postQuestion, updateQuestion } from "../services/question";
import { toast } from 'react-toastify'

const Question = ({ id, index, content, option1, option2, option3, option4, answer, quizId, handleSubmit }) => {
    const [qId, setQid] = useState(quizId)

    const [QuestionId, setId] = useState(id)

    const [formData, setFormData] = useState({
        content,
        option1,
        option2,
        option3,
        option4,
        answer,
    });

    async function onSubmit() {
        if (!formData.content) {
            toast.warn("question is mandatory")
            return
        }
        if (!formData.option1) {
            toast.warn("option1 is mandatory")
            return
        }
        if (!formData.option2) {
            toast.warn("option2 is mandatory")
            return
        }
        if (!formData.option3) {
            toast.warn("option3 is mandatory")
            return
        }
        if (!formData.option4) {
            toast.warn("option4 is mandatory")
            return
        }
        if (!formData.answer) {
            toast.warn("answer is mandatory")
            return
        }

        if (QuestionId) {
            const reqBody = {
                id: QuestionId,
                content: formData.content, option1: formData.option1,
                option2: formData.option2, option3: formData.option3,
                option4: formData.option4, answer: formData.answer
            }
            const resp = await updateQuestion(reqBody)
            if (resp.status == 1) {
                toast.success('Question updated successfully')
            }
            else {
                toast.warn('Question is not updated')
            }
        } else {
            const reqBody = {
                content: formData.content, option1: formData.option1,
                option2: formData.option2, option3: formData.option3,
                option4: formData.option4, answer: formData.answer,
                quizId: quizId
            }
            const resp = await postQuestion(reqBody)
            id = resp.id
            setId(resp.id)
            toast.success('Question added successfully')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-4 border rounded-lg shadow-md mb-4 bg-white w-96 mx-auto">
            <h3 className="text-lg font-semibold mb-2">Question {index + 1}</h3>
            <input
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter Question"
                className="w-full p-2 mb-2 border rounded text-sm"
            />
            <input
                type="text"
                name="option1"
                value={formData.option1}
                onChange={handleChange}
                placeholder="Option 1"
                className="w-full p-2 mb-2 border rounded text-sm"
            />
            <input
                type="text"
                name="option2"
                value={formData.option2}
                onChange={handleChange}
                placeholder="Option 2"
                className="w-full p-2 mb-2 border rounded text-sm"
            />
            <input
                type="text"
                name="option3"
                value={formData.option3}
                onChange={handleChange}
                placeholder="Option 3"
                className="w-full p-2 mb-2 border rounded text-sm"
            />
            <input
                type="text"
                name="option4"
                value={formData.option4}
                onChange={handleChange}
                placeholder="Option 4"
                className="w-full p-2 mb-2 border rounded text-sm"
            />
            <select
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded text-sm"
            >
                <option value="">Select Correct Answer</option>
                <option value={formData.option1}>{formData.option1}</option>
                <option value={formData.option2}>{formData.option2}</option>
                <option value={formData.option3}>{formData.option3}</option>
                <option value={formData.option4}>{formData.option4}</option>
            </select>
            <button
                type="button"
                onClick={onSubmit}
                className="btn btn-success"
            >
                Submit Question
            </button>
        </div>
    );
};

export default Question;
