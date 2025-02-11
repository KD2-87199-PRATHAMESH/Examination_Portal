

import { useEffect, useState } from "react";
import Faculty from "../Components/Faculty";
import { getFaculties, deleteByFacultyId } from "../services/Admin";
import { toast } from "react-toastify";
import NavBarAdmin from "./NavBarAdmin";

function AdminHome() {
    const [faculties, setFaculties] = useState([]);

    async function loadData() {
        const facultyList = await getFaculties();
        setFaculties(facultyList);
    }

    useEffect(() => {
        loadData();
    }, []);

   

    async function handleDelete(id) {
        // Check if the faculty is already in the deletion process
        if (toast.isActive('delete-toast-' + id)) return;  // Prevent duplicate toast for this particular ID
    
        const result = await deleteByFacultyId(id);
        if (result.status === 1) {
            setFaculties(faculties.filter(faculty => faculty.id !== id)); // Remove from UI
            
            // Show success toast
            toast.success("Faculty deleted successfully", {
                toastId: 'delete-toast-' + id  // Unique ID for each toast
            });
        } else {
            toast.error("Failed to delete faculty", {
                toastId: 'delete-toast-error-' + id  // Unique ID for error toast
            });
        }
    }

    
    return (
        <div>
            <NavBarAdmin />
            {faculties.length > 0 && (
                <table className="mt-3 table-hover table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Degree</th>
                            <th>Specialization</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faculties.map(faculty => (
                            <Faculty
                                key={faculty.id}
                                id={faculty.id}
                                fName={faculty.fname}
                                lName={faculty.lname}
                                email={faculty.email}
                                mobNo={faculty.mobNo}
                                degree={faculty.degree}
                                specialization={faculty.specilization}
                                onDelete={handleDelete} 
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AdminHome;
