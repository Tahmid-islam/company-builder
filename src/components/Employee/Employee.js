import React from "react";
import "./Employee.css";
const Employee = (props) => {
  const { handleHire } = props;
  const { name, age, img, experience, position, salary } = props.employee;
  return (
    <div className="col">
      <div className="card h-100 card-container rounded-3">
        <img src={img} className="card-img-top mx-auto" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Experience At: {experience}</p>
          <p className="card-text">Position To Hire: {position}</p>
          <p className="card-text">Expected Salary: {salary}$ Per Month</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => handleHire()}>
            Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
