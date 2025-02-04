import { useNavigate } from "react-router-dom";
import { deleteBySubjectId } from "../services/quiz";
import { toast } from "react-toastify";

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
        navigate(`/edit-quiz/${id}`, {
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
                <button className="btn btn-danger me-2" onClick={() => deleteById(id)}>
                    Delete
                </button>
                <button className="btn btn-primary" onClick={handleEdit}>
                    Edit
                </button>
            </td>
        </tr>
    );
}

export default QuizRow;


// import { deleteBySubjectId } from "../services/quiz";
// import { toast } from "react-toastify";

// function QuizRow({ id, title, marksPerQue, noQ, pass, onDelete }) {
    
//     async function deleteById(id) {
//         const result = await deleteBySubjectId(id)
//         if(result.status == 1) {
//             onDelete()
//             toast.success("deleted successfully")
//         }
//     }
    
//     return (
//         <tr>
//             <td>{title}</td>
//             <td>{marksPerQue}</td>
//             <td>{noQ}</td>
//             <td>{pass}</td>
//             <td>
//                 <button className="btn btn-danger me-2" onClick={() => deleteById(id)}>
//                     Delete
//                 </button>
//                 {/* <button className="btn btn-primary" onClick={() => editById(id)}>
//                     Edit
//                 </button> */}
//             </td>
//         </tr>
//     );
// }

// export default QuizRow;
