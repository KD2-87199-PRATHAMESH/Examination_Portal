import React, { useState } from "react";
import "../styles/ExamConfiguration.css";

const ExamConfig = () => {
  const [formData, setFormData] = useState({
    examType: "Practice Exam",
    module: "DBT",
    startTime: "12:00 a.m",
    endTime: "1:00 a.m",
    duration: "30 min",
    questions: 30,
    correctAnswer: "+3",
    incorrectAnswer: "-1",
    unanswered: "0",
    passingMarks: 35,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      examType: "Practice Exam",
      module: "DBT",
      startTime: "",
      endTime: "",
      duration: "",
      questions: "",
      correctAnswer: "",
      incorrectAnswer: "",
      unanswered: "",
      passingMarks: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 text-center mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4">Exam Configuration</h2>
        <div className="d-flex flex-column align-items-center">
          <label className="form-label">Exam Type</label>
          <select
            name="examType"
            value={formData.examType}
            onChange={handleChange}
            className="form-select w-75"
          >
            <option>Practice Exam</option>
            <option>Final Exam</option>
          </select>

          <label className="form-label mt-2">Select Module</label>
          <select
            name="module"
            value={formData.module}
            onChange={handleChange}
            className="form-select w-75"
          >
            <option>DBT</option>
            <option>Math</option>
            <option>Science</option>
          </select>

          {["startTime", "endTime", "duration", "questions", "correctAnswer", "incorrectAnswer", "unanswered", "passingMarks"].map((field, index) => (
            <div key={index} className="mt-2 w-75">
              <label className="form-label text-capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field === "questions" || field === "passingMarks" ? "number" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            onClick={() => alert("Exam Created!")}
            className="btn btn-primary"
          >
            Create
          </button>
          <button
            onClick={handleClear}
            className="btn btn-secondary"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamConfig;


