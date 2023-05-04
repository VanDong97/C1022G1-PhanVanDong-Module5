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

function App() {
    return (
        <div className="App">
            {/*<Ss1/>*/}
            {/*<Ss2/>*/}
            <Ss3/>
        </div>
    );
}

export default App;
