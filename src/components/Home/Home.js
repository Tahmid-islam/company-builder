import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [cart, setCart] = useState([]);

  //use effect for load data
  useEffect(() => {
    fetch("./employees.JSON")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  //hire  button handler
  const handleHire = (employee) => {
    const newCart = [...cart, employee];
    //checking item already added in the cart or not
    if (!cart.includes(employee)) {
      setCart(newCart);
    } else {
      alert("Already Added In The Cart");
    }
  };

  return (
    <div className="home-container shadow-sm py-3">
      {/* row for show data in home page */}
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
        {employees.map((employee) => (
          <Employee
            key={employee.name}
            employee={employee}
            handleHire={handleHire}
          ></Employee>
        ))}
      </div>
      <div className="mx-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
