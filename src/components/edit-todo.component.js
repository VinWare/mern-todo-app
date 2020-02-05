import React, { Component } from 'react';
import axios from 'axios';
export default class EditTodo extends Component {
    render() {
        return (
             <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.responsible}
                                onChange={this.onChangeResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.priority==='Low'} 
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.priority==='Medium'} 
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.priority==='High'} 
                                    onChange={this.onChangePriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeCompleted}
                                checked={this.state.completed}
                                value={this.state.completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    }

     onSubmit(e) {
        e.preventDefault();
        const obj = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        };
        console.log(obj);
        axios.put('http://localhost:4000/todos/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    onChangeCompleted(e) {
        this.setState({
            completed: !this.state.completed
        });
    }
    constructor(props) {
        super(props);
        
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    responsible: response.data.responsible,
                    priority: response.data.priority,
                    completed: response.data.completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}