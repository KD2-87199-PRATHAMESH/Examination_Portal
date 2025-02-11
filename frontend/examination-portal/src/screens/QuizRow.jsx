import { useNavigate } from "react-router-dom";
import { deleteBySubjectId } from "../services/quiz";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function QuizRow({ id, title, marksPerQue, noQ, pass, onDelete }) {
    const navigate = useNavigate();

    async function deleteById(id) {
        const result = await deleteBySubjectId(id);
        if (result.status === 1) {
            onDelete();
            toast.success("Deleted successfully");
        }
    }

    function handleEdit() {
        navigate(`/edit-quiz`, {
            state: { id, title, marksPerQue, noQ, pass }
        });
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{marksPerQue}</td>
            <td>{noQ}</td>
            <td>{pass}</td>
            <td>
                <Link to="/addQues" state={{ id, noQ }} className="btn btn-secondary me-2">
                    Add / Update Questions
                </Link>
                <button className="btn btn-primary me-2" onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => deleteById(id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default QuizRow;