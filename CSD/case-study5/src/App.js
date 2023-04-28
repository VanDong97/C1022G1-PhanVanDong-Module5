import './App.css';
import Header from "./component/2-1-2/header";
import React from "react";
import Footer from "./component/2-1-2/footer";
import Home from "./component/2-1-2/home";
import EditService from "./component/2-3/editService";
import CreateService from "./component/2-4/createService";
import ListCustomer from "./component/2-5/listCustomer";
import EditCustomer from "./component/2-6/editCustomer";

function App() {
    return (
        <div>
            {/*2-1-2*/}
            {/*<Header/>*/}
            {/*<Home/>*/}
            {/*<Footer/>*/}


            {/*2-3*/}
            {/*<Header/>*/}
            {/*<EditService/>*/}
            {/*<Footer/>*/}

            {/*2-4*/}
            {/*  <Header/>*/}
            {/*  <CreateService/>*/}
            {/*  <Footer/>*/}

            {/*2-5*/}
            {/*<Header/>*/}
            {/*<ListCustomer/>*/}
            {/*<Footer/>*/}

            {/*2-6*/}
            <Header/>
            <EditCustomer/>
            <Footer/>
        </div>
    );
}

export default App;
