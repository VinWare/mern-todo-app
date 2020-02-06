import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.description}</td>
        <td>{props.todo.responsible}</td>
        <td>{props.todo.priority}</td>
        <td>
            <Link to={process.env.PUBLIC_URL + "/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {
    render() {
        return (
            <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.todoList() }
                </tbody>
            </table>
        </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    componentDidMount() {
        axios.get('https://calm-fortress-42269.herokuapp.com/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }
} 