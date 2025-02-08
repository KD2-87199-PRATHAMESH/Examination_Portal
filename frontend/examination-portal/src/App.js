import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./screens/Login";
import Register from "./screens/Register";
import ExamConfiguration from "./screens/ExamConfiguration"
import RegisterStudent from "./screens/RegisterStudent"
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import FacultyHome from "./screens/FacultyHome";
import FacultyProfile from "./screens/FacultyProfile";
import EditQuiz from "./Components/EditQuiz ";
import AddQuiz from "./screens/AddQuiz";
import AddQuestion from "./screens/AddQuestion";

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/examconfig" element={<ExamConfiguration />} />
                <Route path="/registerstudent" element={<RegisterStudent />} />
                <Route path="/home" element={<Home />} />
                <Route path="/facultyhome" element={<FacultyHome />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profilefaculty" element={<FacultyProfile />} />
                <Route path="/edit-quiz" element={<EditQuiz />} />
                <Route path="/addQuiz" element={<AddQuiz />} />
                <Route path="/addQues" element={<AddQuestion />} />
            </Routes>
        </div>
    );
}

export default App;
