import './App.css';
import Header from "./component/2-1-2/header";
import React from "react";
import Footer from "./component/2-1-2/footer";
import {Home} from "./component/2-1-2/home";
import {EditService} from "./component/2-3/editService";
import CreateService from "./component/2-4/createService";
import ListCustomer from "./component/2-5/listCustomer";
import {EditCustomer} from "./component/2-6/editCustomer";
import {CreateCustomer} from "./component/2-7/createCustomer";
import CreateContract from "./component/2-8/createContract";
import ListContract from "./component/2-9/listContract";
import {FacilityList} from "./component/facility/facility/facility_list";
import {CustomerList} from "./component/facility/customer/customer_list";
import {ContractList} from "./component/facility/contract/contract_list";
import {CustomerCreate} from "./component/facility/customer/customer_create";
import {Route, Routes} from "react-router";
import {CustomerEdit} from "./component/facility/customer/customer_edit";
import {ContractCreate} from "./component/facility/contract/contract_create";
import {ContractEdit} from "./component/facility/contract/contract_edit";

export function App() {
    return (
        <>

            {/*<Routes>*/}
            {/*    <Route path='/' element={<CustomerList/>}/>*/}
            {/*    <Route path='/createCustomer' element={<CustomerCreate/>}/>*/}
            {/*    <Route path='/editCustomer/:id' element={<CustomerEdit/>}/>*/}
            {/*</Routes>*/}

            {/*<Routes>*/}
            {/*    <Route path='/' element={<ContractList/> }/>*/}
            {/*    <Route path='/createContract' element={<ContractCreate/> } />*/}
            {/*    <Route path='/editContract/:id' element={<ContractEdit/> } />*/}
            {/*</Routes>*/}
            <FacilityList/>
        </>
    );
}
export default App;
