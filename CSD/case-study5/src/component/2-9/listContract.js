import React, {Component} from "react";

class ListContract extends Component{
    render() {
        return (
            <>
                <table className="table table-light" style={{ width: "100%" }}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Số Hợp Đồng</th>
                        <th>Ngày Bắt Đầu</th>
                        <th>Ngày Kết Thúc</th>
                        <th>Số Tiền Cọc Trước (VND)</th>
                        <th>Tổng Số Tiền Thanh Toán (VND)</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>HD-123</td>
                        <td>11-02-2023</td>
                        <td>11-03-2023</td>
                        <td>10.000.000</td>
                        <td>20.000.000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>HD-234</td>
                        <td>15-03-2023</td>
                        <td>15-04-2023</td>
                        <td>5.000.000</td>
                        <td>10.000.000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>HD-456</td>
                        <td>20-04-2023</td>
                        <td>20-05-2023</td>
                        <td>7.000.000</td>
                        <td>14.000.000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>HD-567</td>
                        <td>25-04-2023</td>
                        <td>25-05-2023</td>
                        <td>6.000.000</td>
                        <td>12.000.000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>HD-678</td>
                        <td>20-06-2023</td>
                        <td>20-06-2023</td>
                        <td>9.000.000</td>
                        <td>18.000.000</td>
                    </tr>
                    </thead>
                </table>
                {/*PAGINATION*/}
                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{ justifyContent: "center" }}>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </>

        );
    }
}
export default ListContract;