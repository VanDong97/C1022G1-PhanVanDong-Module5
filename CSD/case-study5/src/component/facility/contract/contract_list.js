import React from "react";
import Header from "../../2-1-2/header";
import {customer} from "../customer/customer";
import {contract} from "./contract";

export function ContractList() {
    return (
        <>
            <Header/>
            <table className="table table-light" style={{width: "100%"}}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Số Hợp Đồng</th>
                    <th>Ngày Bắt Đầu</th>
                    <th>Ngày Kết Thúc</th>
                    <th>Tiền Cọc Trước</th>
                    <th>Tổng Số Tiên Thanh Toán</th>
                    <th/>
                    <th/>
                </tr>
                {contract.map((contract, index) => (
                    <tr>
                        <td>{contract.stt}</td>
                        <td>{contract.shd}</td>
                        <td>{contract.dateStart}</td>
                        <td>{contract.dateEnd}</td>
                        <td>{contract.deposit}</td>
                        <td>{contract.totalMoney}</td>
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
        </>
    );
}