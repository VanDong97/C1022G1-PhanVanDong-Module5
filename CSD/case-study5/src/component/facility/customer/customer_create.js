import * as customerService from "../../../service/customerService";
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {BallTriangle} from "react-loader-spinner";
import {customerType} from "./customer";
import Header from "../../2-1-2/header";
import Footer from "../../2-1-2/footer";
import "bootstrap/dist/css/bootstrap.css";

export function CustomerCreate() {
    const [customer, setCustomer] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAll();
            setCustomer(result);
            const result2 = await customerService.findAllCustomerType();
            setCustomerType(result2);
        }
        fetchApi();
    }, [])
    const navigate = useNavigate();
    return(
        <>
            <Header/>
            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: '',
                    gender: '',
                    cmnd: '',
                    phoneNumber: '',
                    email: '',
                    customerType: '',
                    address: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập tên !"),
                    cmnd: Yup.number().integer()
                        .required("Vui lòng nhập số CMND !"),
                    phoneNumber: Yup.number().integer()
                        .required("Vui lòng nhập số điện thoại !"),
                    email: Yup.string()
                        .required("Vui lòng nhập địa chỉ email !")
                        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập email theo định dạng abc@gmail.com"),
                    address: Yup.string()
                        .required("Vui lòng nhập địa chỉ bạn đang sinh sống !")
                })}
                onSubmit={(values) => {
                    alert(`Thêm mới ${values.name} thành công`);
                    const createCustomer = async () => {
                        await customerService.customerCreate(values);
                        console.log(values)
                        navigate('/');
                    }
                    createCustomer();
                }}
            >
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

                        <div className="mb-3">
                            <label htmlFor="typeOfGuest" className="form-label fw-bold">
                                Loại khách
                            </label>
                            <Field
                                className="form-control form-control-lg"
                                id="form3Example1cg"
                                name="customerType"
                                as="select"
                            >
                                {customerType.map((type, index) => (
                                    <option key={index} value={type?.id}>
                                        {type?.name}
                                    </option>
                                ))})
                            </Field>
                            <ErrorMessage
                                name="typeOfGuest"
                                component="span"
                                className="text-danger"
                            />
                        </div>

                        <label className="fw-bold">Điền Địa Chỉ :</label>
                        <Field type="text" className="mb-3" name='address'/>
                        <ErrorMessage name='address' component='span' className='form-err'/>

                        <button type='submit' className='btn btn-primary mt-3'>Xác Nhận</button>
                    </div>
                </Form>
            </Formik>
            <Footer/>
        </>
    )
}
