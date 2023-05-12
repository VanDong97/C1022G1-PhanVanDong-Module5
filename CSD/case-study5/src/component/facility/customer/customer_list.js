import React, {useEffect, useState} from "react";
import {customer} from "./customer";
import Header from "../../2-1-2/header";
import Footer from "../../2-1-2/footer";
import * as customerService from "../../../service/customerService";
import {Link} from "react-router-dom";

export function CustomerList() {
    const [customer, setCustomer] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const [deleteId , setDeleteId] = useState();
    const [deleteName , setDeleteName] = useState("");
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAll();
            setCustomer(result);
            const result2 = await customerService.findAllCustomerType();
            setCustomerType(result2);
        }
        fetchApi();
    }, [deleteId]);

const handleDeleteCustomer = async (id,name) => {
    setDeleteId(id);
    setDeleteName(name);
}
const handleDelete = async () => {
    await customerService.deleteCustomer(deleteId)
    setCustomer(await customerService.findAll());
}
const handleSearch = async () => {
    let name = document.getElementById('nameCustomer').value;
    const result = await customerService.findByName(name)
    setCustomer(result);
}
    return (
        <>
            <Header/>
            <input id='nameCustomer' type='text' />
            <button onClick={() => {handleSearch()}} className='mt-2'>Search</button>
            <Link to='/createCustomer' type="button" className="btn btn-primary float-end mt-2">Thêm Mới Khách Hàng</Link>

            <table className="table table-light" style={{width: "100%"}}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ Và Tên</th>
                    <th>Ngày Sinh</th>
                    <th>Giới Tính</th>
                    <th>Số CNND</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th>Loại Khách</th>
                    <th>Địa Chỉ</th>
                    <th/>
                    <th/>
                </tr>
                {customer.map((customers, index) => (
                    <tr>
                        <td>{customers?.id}</td>
                        <td>{customers?.name}</td>
                        <td>{customers?.dateOfBirth}</td>
                        <td>{customers?.gender}</td>
                        <td>{customers?.cmnd}</td>
                        <td>{customers?.phoneNumber}</td>
                        <td>{customers?.email}</td>
                        <td>
                            {customerType.find(
                                (type) => type.id == customers.customerType
                            )?.name}
                        </td>
                        <td>{customers?.address}</td>
                        <td>
                            <Link to={`/editCustomer/${customers.id}`} type="button" className="btn btn-primary float-end mt-2">
                                Sửa
                            </Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => handleDeleteCustomer(customers.id,customers.name)}>
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </thead>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Khách Hàng</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn Có Muốn Khách Hàng {deleteName} Này Xóa Không ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy Bỏ</button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
