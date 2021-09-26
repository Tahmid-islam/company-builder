import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let totalSalary = 0;
  const names = [];

  for (const employee of cart) {
    totalSalary = totalSalary + employee.salary;
    names.push(employee.name);
  }

  return (
    <div className="mx-4 p-4 border border-danger border-3 shadow-lg sticky-top rounded-3">
      <h4>Employees Cart: </h4>
      <table className="table border">
        <tbody>
          <tr>
            <th scope="row">Total Employee: {cart.length}</th>
          </tr>
          <tr>
            <th scope="row">Total Salary: {totalSalary} $</th>
          </tr>
          <tr>
            <th scope="row">
              Employees Name:
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
