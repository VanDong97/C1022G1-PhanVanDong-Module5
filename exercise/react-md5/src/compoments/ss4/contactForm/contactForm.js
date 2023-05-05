import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {BallTriangle} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'

export function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập tên."),
                    email: Yup.string()
                        .required("Vui lòng nhập email.")
                        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập email theo định dạng abc@gmail.com"),
                    phone: Yup.number().integer()
                        .required("Vui lòng nhập số điện thoại"),
                    message: Yup.string()
                        .required("Vui lòng nhập tin nhắn mới gửi đi")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Thêm mới ${values.name} thành công :))`)
                    }, 1000)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className='container' style={{width: '500px'}}>
                            <h1>CONTACT FORM</h1>
                            <Form>
                                <div className='mt-3'>
                                    <label htmlFor="name" className='form-label'>Name</label>
                                    <Field type='text' className='form-control' id='name' name='name'/>
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <Field type='text' className='form-control' id='email' name='email'/>
                                    <ErrorMessage name='email' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="phone" className='form-label'>Phone</label>
                                    <Field type='text' className='form-control' id='phone' name='phone'/>
                                    <ErrorMessage name='phone' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="message" className='form-label'>Message</label>
                                    <Field type='text' className='form-control' id='message' name='message'/>
                                    <ErrorMessage name='message' component='span' className='form-err'/>
                                </div>
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
                                        <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
            {/*<ToastContainer/>*/}
        </>
    )
}