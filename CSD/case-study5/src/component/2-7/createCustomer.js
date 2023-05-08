import React, {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {BallTriangle} from "react-loader-spinner";

export function CreateCustomer() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: '',
                    gender: ['Nam', 'Nữ'],
                    cmnd: '',
                    phoneNumber: '',
                    email: '',
                    customerType: '',
                    address: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập tên"),
                    cmnd: Yup.number().integer()
                        .required("Vui lòng nhập số chứng minh nhân dân"),
                    email: Yup.string()
                        .required("Vui lòng nhập Email")
                        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập email theo định dạng abc@gmail.com"),
                    phoneNumber: Yup.number().integer()
                        .required("Vui lòng nhập số điện thoại"),
                    address: Yup.string()
                        .required("Vui lòng nhập địa chỉ")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Thêm mới ${values.name} thành công !`)
                    }, 1500)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <Form className='w-50 m-auto    '>
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
                                    Thêm Mới Khách Hàng
                                </h2>
                                <Field type="hidden" className="mb-3 "/>

                                <label className="fw-bold">Điền Họ Và Tên : </label>
                                <Field className="mb-3" id='name' name='name' type="text"/>
                                <ErrorMessage name='name' component='span' className='form-err'/>

                                <label className="fw-bold">Điền Ngày Sinh : </label>
                                <Field type="date" id='dateOfBirth' name='dateOfBirth' className="mb-3"/>

                                <div className='mt-3'>
                                    <label htmlFor="gender" className='form-label mt-3'>Giới Tính</label>
                                    <div className='form-check form-check-inline'>
                                        <Field className='form-check-input' type="radio" name="gender" id="gender"
                                               value='0'/>
                                        <label htmlFor="inlineRadio1" className="form-check-label">Nam</label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                        <Field className='form-check-input' type="radio" name="gender" id="gender"
                                               value='1'/>
                                        <label htmlFor="inlineRadio2" className="form-check-label">Nữ</label>
                                    </div>
                                </div>

                                <label className="fw-bold">Điền Số CMND :</label>
                                <Field type="text" className="mb-3" name='cmnd'/>
                                <ErrorMessage name='cmnd' component='span' className='form-err'/>

                                <label className="fw-bold">Điền SDT :</label>
                                <Field type="text" className="mb-3" name='phoneNumber'/>
                                <ErrorMessage name='phoneNumber' component='span' className='form-err'/>

                                <label className="fw-bold">Điền Email :</label>
                                <Field type="text" className="mb-3" name='email'/>
                                <ErrorMessage name='email' component='span' className='form-err'/>

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
                                <Field type="text" className="mb-3" name='address'/>
                                <ErrorMessage name='address' component='span' className='form-err'/>
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
