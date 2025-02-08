import { useEffect, useState } from "react";
import { findBySubjectId } from "../services/quiz";

function Subjects({ id, title }) {
    const [quiz, setQuiz] = useState([]);

    async function loadData() {
        const quizes = await findBySubjectId(id);
        setQuiz(quizes);
    }

    useEffect(() => {
        if (id) {
            loadData();
        }
    }, [id]);

    return (
        <div>
            {quiz.length==0&&<div>There is no quiz available</div>}

            {quiz.map((q) => (
                <div 
                    key={q.id}
                    style={{
                        padding: "5px",
                        margin: "5px 0",
                        backgroundColor: "",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                        fontSize: "16px"
                    }}
                >
                    {q.qtitle}
                </div>
            ))}
        </div>
    );
}

export default Subjects;


// import { useEffect, useState } from "react";
// import { findBySubjectId } from "../services/quiz";

// function Subjects({ id, title }) {

//     const [quiz, setQuiz] = useState([])
    
//     async function loadData() {
//         const quizes = await findBySubjectId(id)
//         setQuiz(quizes)
//     }

//     useEffect(() => {
//         if (id) {
//             loadData()
//         }
//     }, [id])

//     return (
//         <div>
//             {quiz.map(q=>{
//                 return <div>{q.qtitle}</div>
//             })}
//         </div>
//     );
// }

// export default Subjects;

            // const [ subId, setSubid ] = useState(id)
            // const [ tit, settitle ] = useState(title)