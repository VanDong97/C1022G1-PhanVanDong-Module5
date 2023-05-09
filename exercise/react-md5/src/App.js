import './App.css';
import React from "react";
import Student from "./compoments/ss1/student/student";
import SignInForm from "./compoments/ss1/signInForm/signInForm";
import StudentInfo from "./compoments/ss2/studentInfo/studentInfo";
import TodoApp from "./compoments/ss2/todoApp/todoApp";
import {ComponentCounter} from "./compoments/ss3/componentCounter/componentCounter";
import {Ss3} from "./compoments/ss3";
import {Ss1} from "./compoments/ss1";
import {Ss2} from "./compoments/ss2";
import {Ss4} from "./compoments/ss4";
import {ToastContainer} from "react-toastify";
import {Ss5} from "./compoments/ss5";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";
import {BookCreate} from "./compoments/ss5/bookManagement/bookCreate";
import {BookList} from "./compoments/ss5/bookManagement/bookList";
import {BookEdit} from "./compoments/ss5/bookManagement/bookEdit";

export  default function App() {
    return (
        <>
            {/*<Routes>*/}
            {/*    <Route path='/' element={<BookList/>}/>*/}
            {/*    <Route path='/create' element={<BookCreate/>}/>*/}
            {/*    <Route path='/edit/:id' element={<BookEdit />} />*/}
            {/*</Routes>*/}
            {/*// <div className="App">*/}
            {/*// /!*<Ss1/>*!/*/}
            {/*// /!*<Ss2/>*!/*/}
            {/*// /!*<Ss3/>*!/*/}
            {/*// /!*<Ss4/>*!/*/}
            {/*// <Ss5/>*/}
            {/*// </div>*/}
        </>
    );
}