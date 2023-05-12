import React, {useEffect, useState} from "react";
import Header from "../../2-1-2/header";
import {customer} from "../customer/customer";
import {contract} from "./contract";
import * as contractService from "../../../service/contractService";
import Footer from "../../2-1-2/footer";
import {Link} from "react-router-dom";

export function ContractList() {
    const [contract, setContract] = useState([]);
    const [deleteId , setDeleteId] = useState();
    const [deleteName , setDeleteName] = useState("");
    useEffect(() => {
        const fetchApi = async () => {
            const result = await contractService.findAll();
            setContract(result);
        }
        fetchApi();
    },[])
    const handleSearchContract = async () => {
        let shd = document.getElementById('nameContract'.value);
        const result = await contractService.findByName(shd);
        setContract(result);
    }
    const handleDeleteContract = async  (id,shd) => {
        setDeleteId(id);
        setDeleteName(shd);
    }
    const handleDelete = async () => {
        await contractService.deleteContract(deleteId);
        setContract(await contractService.findAll());
    }
    return (
        <>
            <Header/>
            <h3 className='text-center mt-3'>Danh Sach Hợp Đồng</h3>
            <input id='nameContract' type='text' />
            <button onClick={() => {handleSearchContract()}} className='mt-2' >Search</button>
            <Link to='/createContract' type="button" className="btn btn-primary float-end mt-2">Thêm Mới Hợp Đồng</Link>
            <table className="table table-light mt-3" style={{width: "100%"}}>
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
                {contract.map((contracts, index) => (
                    <tr>
                        <td>{contracts?.id}</td>
                        <td>{contracts?.shd}</td>
                        <td>{contracts?.dateStart}</td>
                        <td>{contracts?.dateEnd}</td>
                        <td>{contracts?.deposit}</td>
                        <td>{contracts?.totalMoney}</td>
                        <td>
                            <Link to={`/editContract/${contracts.id}`} type="button" className="btn btn-primary float-end mt-2">
                                Sửa
                            </Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => handleDeleteContract(contracts.id,contracts.shd)}>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Hợp Đồng</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn xóa hợp đồng {deleteName} này không ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy Bỏ</button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}