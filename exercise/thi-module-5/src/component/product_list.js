import React, {useEffect, useState} from "react";
import axios from "axios";
import * as Yup from 'yup';
import {Formik} from "formik";
import {Link} from "react-router-dom";
import productTypeService from "../service_API/productTypeService";
import productService from "../service_API/productService";


export function ProductList() {
    const [product, setProduct] = useState([]);
    const [pageCount , setPageCount] = useState(0);
    const [filters , setFilters] = useState({
        page : 0,
        name : "",
        type : ""
    })
    const [deleteId, setDeleteId] = useState();
    const [deleteName, setDeleteName] = useState("");
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await productService.findAllWithPageOrName(filters);

                setProduct(response.data.content);
                setPageCount(response.data.total);
            } catch (error) {
                console.warn(error);
            }
        }
        getProduct();
    },[filters])
    const handleSearch = async () => {
        let name = document.getElementById('nameProduct').value;
        const result = await productService.findByName(name)
        setProduct(result);
    }
    const handleDeleteProduct = async (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }
    const handleDelete = async () => {
        await productService.deleteProduct(deleteId);
        setProduct(await productService.findALl());
    }
    return (
        <>
            <h3 className='text-center'>Danh Sách Sản Phẩm</h3>
            <input id='nameProduct' type='text'/>
            <button onClick={() => {
                handleSearch()
            }} className='mt-2'>Tìm Kiếm
            </button>
            <Link to='/create' type="button" className="btn btn-primary float-end mt-2">Thêm Mới Sản Phẩm</Link>
            {
                product.length === 0 ? <h2 className='text-danger'>Không tìm thấy kết quả</h2> :
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Ngày Nhập</th>
                            <th>Số Lượng</th>
                            <th>Loại Sản Phẩm</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            product?.map((products) => (
                                <tr>
                                    <td>{products?.id}</td>
                                    <td>{products?.name}</td>
                                    <td>{products?.date}</td>
                                    <td>{products?.quantity}</td>
                                    <td>
                                        {/*{productType.find(*/}
                                        {/*    (type) => type.id == products.productType.id*/}
                                        {/*)?.name}*/}
                                        {products?.productType.name}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${products.id}`} type="button"
                                              className="btn btn-primary m-1">Chỉnh Sửa</Link>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={() => handleDeleteProduct(products.id, products.name)}>
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
            }
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Sản Phẩm</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn Có Muốn Sản Phẩm {deleteName} Này Xóa Không ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy Bỏ</button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-primary"
                                    data-bs-dismiss="modal">Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}