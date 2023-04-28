import {Component} from "react";
import React from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoName: '',
            todoList: ['Làm Bài 1', 'Làm Bài 2']
        }
    }

    handleInputName(value) {
        this.setState({
            todoName: value
        })
    }

    handleAddTodo() {
        this.setState({
            todoList: [...this.state.todoList, this.state.todoName],
            todoName: ''
        })
    }

    render() {
        return (
            <>
                <h1>TODO LIST</h1>
                <input
                    value={this.state.todoName}
                    onChange={(event => this.handleInputName(event.target.value))}
                />
                <button onClick={() => this.handleAddTodo()}> ADD
                </button>
                <ul>
                    {
                        this.state.todoList.map((todoApp, index) => (
                            <li key={index}>
                                {todoApp}
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default TodoApp;