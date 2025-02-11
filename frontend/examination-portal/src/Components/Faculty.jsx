// import { useNavigate } from "react-router-dom";
// // import { deleteBySubjectId } from "../services/quiz";
// import { deleteByFacultyId } from "../services/Admin";
// import { toast } from "react-toastify";
// // import { Link } from "react-router-dom";

//  async function deleteById(id) {
//         const result = await deleteByFacultyId(id);
//         if (result.status === 1) {
//             // onDelete();
//             toast.success("Deleted successfully");
//         }
//     }

// 	// private String fName;
	
// 	// private String lName;

// 	// private String email;

// 	// private String password;
	
// 	// private String mobNo;

// 	// private Degree degree;
	
// 	// private Specilization specilization;
	
// 	// private boolean status = true;

// function Faculty({ id, fName, lName, email, password, mobNo, degree ,specialization}) {
//     // const navigate = useNavigate();
  

//     return (
//         <tr>
//             <td>{id}</td>
//             <td>{fName}</td>
//             <td>{lName}</td>
//             <td>{email}</td>
//             <td>{mobNo}</td>
//             <td>{degree}</td>
//             <td>{specialization}</td>
//             <td>
//                 {/* <Link to="/addQues" state={{ id, noQ }} className="btn btn-secondary me-2">
//                     Add Questions
//                 </Link> */}
//                <button className="btn btn-danger" onClick={() => deleteById(id)}>
//                     Delete
//                 </button>
//             </td>
//         </tr>
//     );
// }

// export default Faculty;


import { toast } from "react-toastify";
import { deleteByFacultyId } from "../services/Admin";

function Faculty({ id, fName, lName, email, mobNo, degree, specialization, onDelete }) {
    async function deleteById() {
        try {
            const result = await deleteByFacultyId(id);
            if (result.status === 1) {
                onDelete(id); // Remove faculty from UI
                toast.success("Faculty deleted successfully");
            } else {
                toast.error("Failed to delete faculty.");
            }
        } catch (error) {
            toast.error("Error deleting faculty.");
            console.error("Delete Error:", error);
        }
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{email}</td>
            <td>{mobNo}</td>
            <td>{degree}</td>
            <td>{specialization}</td>
            <td>
                <button className="btn btn-danger" onClick={deleteById}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Faculty;
