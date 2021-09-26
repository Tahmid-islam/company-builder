import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let totalSalary = 0;
  // create an empty array to show employees name in cart
  const names = [];

  for (const employee of cart) {
    totalSalary = totalSalary + employee.salary;
    //push the names of employees in the cart
    names.push(employee.name);
  }

  return (
    <div className="mx-4 p-4 border border-danger border-4 shadow-lg sticky-top rounded-2">
      <h4 className="text-center fw-bold text-danger">Employees Cart</h4>
      <table className="table border">
        <tbody>
          <tr>
            <th scope="row">Total Employees Added: {cart.length}</th>
          </tr>
          <tr>
            <th scope="row">
              {/* show employee names */}
              Added Employees Name:
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </th>
          </tr>
          <tr>
            <th scope="row">Total Salary: {totalSalary}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
