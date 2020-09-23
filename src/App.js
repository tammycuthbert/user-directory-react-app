import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/EmployeeTable";
const fakeUsers = [{
    name: "Joe",
    email: "email@email.com",
    id: "1",
    phone: "123-456-7890",
}, ];

function App() {
    return ( <
        div className = "App" >
        <
        Table users = { fakeUsers }
        />{" "} <
        /div>
    );
}

export default App;