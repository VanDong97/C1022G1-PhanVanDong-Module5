import {Component} from "react";
import React from "react";

class EditService extends Component {
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
                            Chỉnh Sửa Room
                        </h2>
                        <input type="hidden" className="mb-3 username"/>
                        <label className="fw-bold">Điền Tên Room : </label>
                        <input className="mb-3" type="text"/>
                        <label className="fw-bold">Điền Diện Tích Sử Dụng : </label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Điền Chi Phí Thuê :</label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Số Người Tối Đa :</label>
                        <input type="text" className="mb-3"/>
                        <label className="fw-bold">Hình Ảnh :</label>
                        <input type="text" className="mb-3"/>
                        <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                        >
                            <option selected="">Kiểu Thuê</option>
                            <option value={1}>Năm</option>
                            <option value={2}>Tháng</option>
                            <option value={3}>Ngày</option>
                            <option value={4}>Giờ</option>
                        </select>
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
                <div className="col-4">
                </div>
            </div>
        );
    }
}

export default EditService;