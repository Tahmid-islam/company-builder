import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("employees.JSON")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleHire = () => {
    console.log("Employee clicked");
  };
  return (
    <div className="home-container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
        {employees.map((employee) => (
          <Employee
            key={employee.name}
            employee={employee}
            handleHire={handleHire}
          ></Employee>
        ))}
      </div>
      <div className="m">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
