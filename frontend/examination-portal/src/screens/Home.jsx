import { useEffect, useState } from "react";
import NavBarStudent from "./NavBarStudent";
import { getStudentSubject } from "../services/student";
import Subjects from "../Components/Subjects";

function Home() {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubjectId, setSelectedSubjectId] = useState(null);

    async function loadData() {
        const courseId = JSON.parse(sessionStorage.getItem("student")).selectedCourse.id;
        const res = await getStudentSubject(courseId);
        setSubjects(res);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <NavBarStudent />
            <div>
                {subjects.map((sub) => (
                    <div key={sub.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ddd" }}>
                        <button
                            onClick={() => setSelectedSubjectId(selectedSubjectId === sub.id ? null : sub.id)}
                            style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "10px",
                                fontSize: "16px",
                                background: "#f1f1f1",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            {sub.title}
                        </button>
                        {/* Show quizzes only if this subject is selected */}
                        {selectedSubjectId === sub.id && <Subjects id={sub.id} title={sub.title} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;


// import { useEffect, useState } from "react";
// import NavBarStudent from "./NavBarStudent";
// import { getStudentSubject } from "../services/student";
// import Subjects from "../Components/Subjects";

// function Home() {
//     const [subjects, setSubjects] = useState([]);
//     const [selectedSubject, setSelectedSubject] = useState(null);

//     async function loadData() {
//         const courseId = JSON.parse(sessionStorage.getItem("student")).selectedCourse.id;
//         const res = await getStudentSubject(courseId);
//         setSubjects(res);
//     }

//     useEffect(() => {
//         loadData();
//     }, []);

//     return (
//         <div>
//             <NavBarStudent />
//             <div>
//                 {subjects.map((sub) => (
//                     <div key={sub.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ddd" }}>
//                         <button
//                             onClick={() => setSelectedSubject(sub)}
//                             style={{
//                                 width: "100%",
//                                 textAlign: "left",
//                                 padding: "10px",
//                                 fontSize: "16px",
//                                 background: "#f1f1f1",
//                                 border: "none",
//                                 cursor: "pointer"
//                             }}
//                         >
//                             {sub.title}
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             {/* Display Subjects Component when a subject is clicked */}
//             {selectedSubject && <Subjects id={selectedSubject.id} title={selectedSubject.title} />}
//         </div>
//     );
// }

// export default Home;









// import { useEffect, useState } from "react";
// import NavBarStudent from "./NavBarStudent";
// import { getStudentSubject } from "../services/student";
// import Subjects from "../Components/Subjects";

// function Home() {

//     const [subjects, setSubjects] = useState([])

//     async function loadData() {
//         const courseId = JSON.parse(sessionStorage.getItem('student')).selectedCourse.id
//         const res = await getStudentSubject(courseId)
//         setSubjects(res)
//     }

//     useEffect(() => {
//         loadData()
//     }, [])

//     return (
//         <div>
//             <NavBarStudent />
//             {subjects.map(sub => {
//                 return <Subjects id={sub.id} title={sub.title} />
//             })}
//         </div>
//     );
// }

// export default Home;