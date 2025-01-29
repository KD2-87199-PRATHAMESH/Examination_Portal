import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./screens/Login";
import Register from "./screens/Register";
import ExamConfiguration from "./screens/ExamConfiguration"

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/examconfig" element={<ExamConfiguration />} />
            </Routes>
        </div>
    );
}

export default App;
