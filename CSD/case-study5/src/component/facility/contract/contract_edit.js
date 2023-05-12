import * as contractService from "../../../service/contractService";
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import Header from "../../2-1-2/header";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Footer from "../../2-1-2/footer";
export function ContractEdit() {
    const param = useParams();
    const [contract , setContract] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await contractService.findById(param.id);
            setContract(result);
        };
        fetchApi();
    },[param.id]);

    if (!contract){
        return null
    }
    return (
        <>
            <Header/>
            <Formik
                initialValues={{
                    shd: contract?.shd,
                    dateStart: contract?.dateStart,
                    dateEnd: contract?.dateEnd,
                    deposit: contract?.deposit,
                    totalMoney: contract?.totalMoney
                }}
                validationSchema={Yup.object({
                    shd: Yup.string()
                        .required("Vui lòng nhâp số hợp đồng"),
                    deposit: Yup.number().integer()
                        .required("Vui lòng nhập số tiền đặt cọc"),
                    totalMoney: Yup.number().integer()
                        .required("Vui lòng nhập tổng số tiền")
                })}
                onSubmit={(values) => {
                    alert(`Chỉnh Sửa ${values.shd} thành công`);
                    const editContract = async () => {
                        await contractService.contractEdit(contract.id,values);
                        navigate('/')
                    }
                    editContract();
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
                            Chỉnh Sửa Hợp Đồng
                        </h2>
                        <Field type="hidden" className="mb-3 "/>

                        <label className="fw-bold">Số Hợp Đồng : </label>
                        <Field className="mb-3" name='shd' type="text"/>
                        <ErrorMessage name='shd' component='span' className='form-err'/>

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