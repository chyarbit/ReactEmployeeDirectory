import React from "react";
import "./style.css";

function SearchResults(props) {
  return (

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {props.results && props.results.map((employee, index) => (
            <tr key = {index}> 
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            </tr>
          ))}

        </tbody>
</table>

  );
}

export default SearchResults;
