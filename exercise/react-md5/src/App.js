import './App.css';
import React from "react";
import Student from "./compoments/ss1/student/student";
import SignInForm from "./compoments/ss1/signInForm/signInForm";
import StudentInfo from "./compoments/ss2/studentInfo/studentInfo";
import TodoApp from "./compoments/ss2/todoApp/todoApp";

function App() {
    return (
        <div className="App">
            {/*<Student />*/}
            {/*<SignInForm />*/}
            {/*{<StudentInfo/>}*/}
            {<TodoApp />}
        </div>
    );
}

export default App;
