// import logo from "./logo.svg";

import Employee from "../components/Employee";
import EditEmployee from "../components/EditEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import AddEmployee from "../components/AddEmployee";
function Employees() {
  const [role, setRole] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Nisar Ahmed",
      role: "Developer",
      img: "https://drnisar.org/wp-content/uploads/2023/06/Photo.jpg",
    },
    {
      id: 2,
      name: "Fayaz Ahmed",
      role: "Manager",
      img: "https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Riaz Ahmed",
      role: "Boss",
      img: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Hammad",
      role: "vvv",
      img: "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg",
    },
    {
      id: 5,
      name: "Danish Yaseen",
      role: "TMO",
      img: "https://images.pexels.com/photos/16321378/pexels-photo-16321378/free-photo-of-black-and-white-city-people-art.jpeg",
    },
  ]);
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee={updateEmployee}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center">
          <AddEmployee newEmployee={newEmployee} />
        </div>
      </div>
    </>
  );
}

export default Employees;
