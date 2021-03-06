import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

function App() {
  return (
    <Router>
    <div className="App">
              <h2>MERN-Stack Todo App</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={ process.env.PUBLIC_URL + "/"} className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to={ process.env.PUBLIC_URL +"/"} className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to={ process.env.PUBLIC_URL + "/create"} className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={TodosList} />
          <Route path={ process.env.PUBLIC_URL + "/edit/:id"} component={EditTodo} />
          <Route path={ process.env.PUBLIC_URL + "/create"} component={CreateTodo} />
              </div>
              </Router>
  );
}

export default App;
