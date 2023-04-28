import {Component} from "react";
import React from "react";

class ListCustomer extends Component {
    render() {
        return (
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
                <tr>
                    <td>1</td>
                    <td>Lê Văn A</td>
                    <td>11-02-2002</td>
                    <td>Nam</td>
                    <td>197252415</td>
                    <td>0964258741</td>
                    <td>levana@gmail.com</td>
                    <td>Diamond</td>
                    <td>Đà Nẵng</td>
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
                <tr>
                    <td>2</td>
                    <td>Lê Văn B</td>
                    <td>11-02-2000</td>
                    <td>Nữ</td>
                    <td>197252415</td>
                    <td>0964258741</td>
                    <td>levanb@gmail.com</td>
                    <td>Platinium</td>
                    <td>Huế</td>
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
                <tr>
                    <td>3</td>
                    <td>Lê Văn C</td>
                    <td>11-02-1997</td>
                    <td>Nam</td>
                    <td>197252415</td>
                    <td>0964258741</td>
                    <td>levanc@gmail.com</td>
                    <td>Gold</td>
                    <td>Quảng Trị</td>
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
                <tr>
                    <td>4</td>
                    <td>Lê Văn D</td>
                    <td>11-02-2002</td>
                    <td>Nữ</td>
                    <td>197252415</td>
                    <td>0964258741</td>
                    <td>levand@gmail.com</td>
                    <td>Silver</td>
                    <td>Đà Nẵng</td>
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
                <tr>
                    <td>5</td>
                    <td>Lê Văn E</td>
                    <td>11-02-2002</td>
                    <td>Nam</td>
                    <td>197252415</td>
                    <td>0964258741</td>
                    <td>levane@gmail.com</td>
                    <td>Member</td>
                    <td>Đà Nẵng</td>
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
                </thead>
            </table>
        );
    }
}

export default ListCustomer;