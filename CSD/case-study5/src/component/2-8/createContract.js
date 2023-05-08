import React, {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {BallTriangle} from "react-loader-spinner";

export function CreateContract() {
    return (
        <>
            <Formik
                initialValues={{
                    code: '',
                    startDate: '',
                    endDate: '',
                    deposit: '',
                    totalMoney: ''
                }}
                validationSchema={Yup.object({
                    code: Yup.string()
                        .required("Vui lòng nhâp số hợp đồng"),
                    startDate: Yup.number().integer()
                        .required("Vui lòng nhập ngày bắt đầu"),
                    endDate: Yup.number().integer()
                        .required("Vui long nhập ngày kết thúc"),
                    deposit: Yup.number().integer()
                        .required("Vui lòng nhập số tiền đặt cọc"),
                    totalMoney: Yup.number().integer()
                        .required("Vui lòng nhập tổng số tiền")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast(`Thêm mới ${values.code} thành công`);
                    }, 1500);
                }}
            >
                {
                    ({isSubmitting}) => (
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

                                {
                                    isSubmitting ?
                                        <BallTriangle
                                            height={100}
                                            width={100}
                                            radius={5}
                                            color="#4fa94d"
                                            ariaLabel="ball-triangle-loading"
                                            wrapperClass={{}}
                                            wrapperStyle=""
                                            visible={true}
                                        />
                                        :
                                        <button type='submit' className='btn btn-primary mt-3'>Xác Nhận</button>
                                }
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}

export default CreateContract;