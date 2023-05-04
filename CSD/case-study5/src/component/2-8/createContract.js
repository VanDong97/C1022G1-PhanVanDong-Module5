import React, {Component} from "react";

class CreateContract  extends Component{
    render() {
        return(
            <div className="row" style={{ background: "#addccf" }}>
                <div className="col-4"></div>
                <div className="col-4 text-center">
                    <form className="d-flex flex-column" method="post" style={{ width: 500 }}>
                        <h2
                            className="text-center"
                            style={{
                                color: "#212529",
                                fontSize: 20,
                                fontWeight: 500,
                                padding: "10px 24px"
                            }}
                        >
                            Thêm Mới Hợp Đồng
                        </h2>
                        <input type="hidden" className="mb-3 " />
                        <label className="fw-bold">Số Hợp Đồng : </label>
                        <input className="mb-3" type="text" />
                        <label className="fw-bold">Ngày Bắt Đầu : </label>
                        <input type="date" className="mb-3" />
                        <label className="fw-bold">Ngày Kết Thúc :</label>
                        <input type="date" className="mb-3" />
                        <label className="fw-bold">Số Tiền Cọc Trước :</label>
                        <input type="text" className="mb-3" />
                        <label className="fw-bold">Tổng Số Tiền Thanh Toán :</label>
                        <input type="text" className="mb-3" />
                    </form>
                </div>
                <div className="col-4"></div>
            </div>

        );
    }
}
export default CreateContract;