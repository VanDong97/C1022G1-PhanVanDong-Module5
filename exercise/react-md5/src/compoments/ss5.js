import React from "react";
import {ToDoList} from "./ss5/todoList/todoList";
import {TodoCreate} from "./ss5/todoList/todoCreate";
import {BookList} from "./ss5/bookManagement/bookList";
import {BookCreate} from "./ss5/bookManagement/bookCreate";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";

export function Ss5() {
    return (
        <div>
            {/*<ToDoList/>*/}
            {/*<TodoCreate/>*/}
            <BookList/>
            {/*<BookCreate/>*/}
        </div>
    )
}