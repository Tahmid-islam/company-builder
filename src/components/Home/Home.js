import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("employees.JSON")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleHire = (employee) => {
    const newCart = [...cart, employee];
    setCart(newCart);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
