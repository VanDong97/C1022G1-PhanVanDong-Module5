import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ProductList} from "./component/product_list";
import {ProductEdit} from "./component/product_edit";
import {CreateProduct} from "./component/product_create";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ProductList />} />
                {/*<Route path='/edit/:id' element={<ProductEdit/>}/>*/}
                {/*<Route path='/create' element={<CreateProduct/>} />*/}
            </Routes>
        </>
)
    ;
}

export default App;
