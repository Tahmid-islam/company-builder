import React from "react";
import "./Employee.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const Employee = (props) => {
  const { handleHire } = props;
  const { name, age, img, experience, position, salary } = props.employee;
  return (
    //   bootstrap card
    <div className="col">
      <div className="card h-100 card-container rounded-4 border-2">
        <img
          src={img}
          className="card-img-top mx-auto mt-2 rounded-3 img-fluid"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <span className="fw-bold">Age:</span> {age}
          </p>
          <p className="card-text">
            <span className="fw-bold">Experience At:</span> {experience}
          </p>
          <p className="card-text">
            <span className="fw-bold">Position To Hire:</span> {position}
          </p>
          <p className="card-text">
            <span className="fw-bold">Expected Salary:</span> ${salary} Per Week
          </p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-danger rounded-2 px-1"
            onClick={() => handleHire(props.employee)}
          >
            <FontAwesomeIcon icon={faUserCheck} />
            &nbsp; Hire {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
