import React from "react";
import {customer} from "./customer";
import Header from "../../2-1-2/header";
import Footer from "../../2-1-2/footer";

export function CustomerList() {
    return (
        <>
            <Header/>
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
                        <td>{customers.id}</td>
                        <td>{customers.name}</td>
                        <td>{customers.dateOfBirth}</td>
                        <td>{customers.gender}</td>
                        <td>{customers.cmnd}</td>
                        <td>{customers.phoneNumber}</td>
                        <td>{customers.email}</td>
                        <td>{customers.customerType}</td>
                        <td>{customers.address}</td>
                        <td>
                            <a href="#" className="btn btn-primary">
                                Sửa
                            </a>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </thead>
            </table>
            <Footer/>
        </>
    );
}
