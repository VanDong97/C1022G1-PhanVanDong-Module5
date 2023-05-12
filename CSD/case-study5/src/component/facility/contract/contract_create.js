import * as contractService from "../../../service/contractService";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {BallTriangle} from "react-loader-spinner";
import Header from "../../2-1-2/header";
import Footer from "../../2-1-2/footer";

export function ContractCreate() {
    const [contract, setContract] = useState([]);
    const navigate = useNavigate();
    return (
        <>
        <Header/>
        <Formik
                initialValues={{
                    code: '',
                    dateStart: '',
                    dateEnd: '',
                    deposit: '',
                    totalMoney: ''
                }}
                validationSchema={Yup.object({
                    code: Yup.string()
                        .required("Vui lòng nhâp số hợp đồng"),
                    deposit: Yup.number().integer()
                        .required("Vui lòng nhập số tiền đặt cọc"),
                    totalMoney: Yup.number().integer()
                        .required("Vui lòng nhập tổng số tiền")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    alert(`Thêm mới ${values.name} thành công`);
                    const createContract = async () => {
                        await contractService.contractCreate(values);
                        navigate('/')
                    }
                    createContract();
                }}
            >
                <Form className='w-50 m-auto'>
                    <div className="row" style={{background: "#addccf"}}>
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
                        <Field type="hidden" className="mb-3 "/>

                        <label className="fw-bold">Số Hợp Đồng : </label>
                        <Field className="mb-3" name='code' type="text"/>
                        <ErrorMessage name='code' component='span' className='form-err'/>

                        <label className="fw-bold">Ngày Bắt Đầu : </label>
                        <Field type="date" name='startDate' className="mb-3"/>
                        <ErrorMessage name='startDate' component='span' className='form-err'/>

                        <label className="fw-bold">Ngày Kết Thúc :</label>
                        <Field type="date" name='endDate' className="mb-3"/>
                        <ErrorMessage name='endDate' component='span' className='form-err'/>

                        <label className="fw-bold">Số Tiền Cọc Trước :</label>
                        <Field type="text" name='deposit' className="mb-3"/>
                        <ErrorMessage name='deposit' component='span' className='form-err'/>

                        <label className="fw-bold">Tổng Số Tiền Thanh Toán :</label>
                        <Field type="text" name='totalMoney' className="mb-3"/>
                        <ErrorMessage name='totalMoney' component='span' className='form-err'/>

                        <button type='submit' className='btn btn-primary mt-3'>Xác Nhận</button>
                    </div>
                </Form>
            </Formik>
            <Footer/>
        </>
    );
}