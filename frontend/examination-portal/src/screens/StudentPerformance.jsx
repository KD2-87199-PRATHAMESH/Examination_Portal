import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/StudentPerformance.css";

const StudentPerformance = () => {
  const [formData, setFormData] = useState({
    module: "DBT",
    batch: "KDAC-2024",
    examType: "Mid Module Exam",
    passedPercentage: "80%",
    failedPercentage: "15%",
    unattempted: "15"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 text-center mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4">Students Performance</h2>
        <div className="d-flex flex-column align-items-center">
          <label className="form-label">Select Module</label>
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

          <label className="form-label mt-2">Select Batch</label>
          <select
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="form-select w-75"
          >
            <option>KDAC-2024</option>
            <option>KDAC-2025</option>
          </select>

          <label className="form-label mt-2">Select Exam Type</label>
          <select
            name="examType"
            value={formData.examType}
            onChange={handleChange}
            className="form-select w-75"
          >
            <option>Mid Module Exam</option>
            <option>Final Exam</option>
          </select>
        </div>

        <button className="btn btn-primary mt-3">Submit</button>

        <div className="mt-4">
          <label className="form-label">Percentage Passed Students</label>
          <input
            type="text"
            name="passedPercentage"
            value={formData.passedPercentage}
            onChange={handleChange}
            className="form-control w-75 mx-auto"
          />

          <label className="form-label mt-2">Percentage Failed Students</label>
          <input
            type="text"
            name="failedPercentage"
            value={formData.failedPercentage}
            onChange={handleChange}
            className="form-control w-75 mx-auto"
          />

          <label className="form-label mt-2">Total Unattempted Students</label>
          <input
            type="text"
            name="unattempted"
            value={formData.unattempted}
            onChange={handleChange}
            className="form-control w-75 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentPerformance;
