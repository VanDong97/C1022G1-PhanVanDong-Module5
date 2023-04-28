import {Component} from "react";
import React from "react";

class EditCustomer extends Component {
    render() {
        return (
            <div className="row" style={{background: "#addccf"}}>
                <div className="col-4"></div>
                <div className="col-4 text-center">
                    <form className="d-flex flex-column" method="post" style={{width: 500}}>
                        <h2
                            className="text-center"
                            style={{
                                color: "#212529",
                                fontSize: 20,
                                fontWeight: 500,
                                padding: "10px 24px"
                            }}
                        >
                            Chỉnh Sửa Khách Hàng
                        </h2>
                        <input type="hidden" className="mb-3 "/>
                        <label className="fw-bold">Điền Họ Và Tên : </label>
                        <input className="mb-3" type="text"/>
                        <label className="fw-bold">Điền Ngày Sinh : </label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Điền Giới Tính :</label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Điền Số CMND :</label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Điền SDT :</label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Điền Email :</label>
                        <input type="text" className="mb-3"/>
                        <select
                            className="fw-bold form-select form-select-sm"
                            aria-label=".form-select-sm example"
                        >
                            <option selected="">Loại Khách</option>
                            <option value={1}>Diamond</option>
                            <option value={2}>Platinium</option>
                            <option value={3}>Gold</option>
                            <option value={4}>Silver</option>
                            <option value={5}>Member</option>
                        </select>
                        <label className="fw-bold">Điền Địa Chỉ :</label>
                        <input type="text" className="mb-3"/>
                        <div className="mt-3">
                            <input
                                type="submit"
                                className="btn btn-danger fw-bold"
                                defaultValue="Xác Nhận"
                            />
                            <button type="button" className="btn btn-secondary">
                                Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>

        );
    }
}

export default EditCustomer;
