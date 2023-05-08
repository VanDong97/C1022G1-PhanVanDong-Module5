import {Component} from "react";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {BallTriangle} from "react-loader-spinner";
import * as Yup from "yup";
import {toast} from "react-toastify";

export function EditService() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    area: '',
                    money: '',
                    people: '',
                    img: '',
                    rentalType: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập tên dịch vụ"),
                    area: Yup.number().integer()
                        .required("Vui lòng nhập diện tích"),
                    money: Yup.number().integer()
                        .required("Vui lòng nhập số tiền"),
                    people: Yup.number().integer()
                        .required("Vui lòng nhập số người tối đa")
                })}

                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Chỉnh sửa ${values.name} thành công`)
                    }, 1500)
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
                                    Chỉnh Sửa Room
                                </h2>
                                <Field type="hidden" className="mb-3 username"/>

                                <label className="fw-bold">Điền Tên Room : </label>
                                <Field className="mb-3" name='name' type="text"/>
                                <ErrorMessage name='name' component='span' className='form-err'/>

                                <label className="fw-bold">Điền Diện Tích Sử Dụng : </label>
                                <Field type="text" name='area' className="mb-3"/>
                                <ErrorMessage name='area' component='span' className='form-err'/>

                                <label className="fw-bold">Điền Chi Phí Thuê :</label>
                                <Field type="text" name='money' className="mb-3"/>
                                <ErrorMessage name='money' component='span' className='form-err'/>

                                <label className="fw-bold">Số Người Tối Đa :</label>
                                <Field type="text" name='people' className="mb-3"/>
                                <ErrorMessage name='people' component='span' className='form-err'/>

                                <label className="fw-bold">Hình Ảnh :</label>
                                <Field type="text" name='img' className="mb-3"/>

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
    )
}
