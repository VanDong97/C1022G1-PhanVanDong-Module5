import React, {useEffect, useState} from "react";
import * as todoService from "../../../service/todoService";

export function ToDoList() {
    const [todoList, setToDoList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await todoService.findAll()
            setToDoList(result)
        }
        fetchApi();
    }, [])
    return (
        <>
            <h1>ToDo List</h1>
            <ul>
                {
                    todoList.map((todo) => (
                            <li>{todo.title}</li>
                        )
                    )
                }
            </ul>
        </>
    )
}