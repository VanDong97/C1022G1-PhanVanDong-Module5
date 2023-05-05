import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {BallTriangle} from "react-loader-spinner";

export function MedicalForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    cmnd: '',
                    dateOfBirth: '',
                    gender: ['Nam', 'Nữ'],
                    nationality: '',
                    company: '',
                    part: '',
                    insuranceCard: '',
                    city: '',
                    district: '',
                    commune: '',
                    homeNumber: '',
                    phoneNumber: '',
                    email: '',
                    signal: ['Sốt', 'Ho', 'Khó Thở', 'Viêm Phổi', 'Đau Họng', 'Mệt Mỏi'],
                    contact: ['Người bệnh', 'Người từ nước ngoài', 'Người có biểu hiện']
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Vui lòng nhập tên!"),
                    cmnd: Yup.number().integer()
                        .required("Vui lòng nhập số CMND !"),
                    dateOfBirth: Yup.date()
                        .required("Vui lòng nhập ngày tháng năm sinh !"),
                    nationality: Yup.string()
                        .required("Vui lòng nhập quốc tịch !"),
                    city: Yup.string()
                        .required("Vui lòng nhập thành phố bạn đang sống !"),
                    district: Yup.string()
                        .required("Vui lòng nhập huyện bạn đang sống !"),
                    commune: Yup.string()
                        .required("Vui lòng nhập xã bạn đang sống !"),
                    homeNumber: Yup.string()
                        .required("Vui lòng nhập số nhà !"),
                    phoneNumber: Yup.number().integer()
                        .required("Vui lòng nhập số điện thoại !"),
                    email: Yup.string()
                        .required("Vui lòng nhập email !")
                        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập email theo định dạng abc@gmail.com")
                })}
                onSubmit={((values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast(`Lưu thông tin thành công`)
                    }, 1000)
                })}
            >
                {
                    ({isSubmitting}) => (
                        <div className='container' style={{width: '500px'}}>
                            <h1>Tờ Khai Y Tế</h1>
                            <Form>
                                <div className='mt-3'>
                                    <label htmlFor="name" className='form-label'>Họ Và Tên</label>
                                    <Field type='text' className='form-control' id='name' name='name'/>
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="cmnd" className='form-label'>Số Hộ Chiếu/CMND</label>
                                    <Field type='text' className='form-control' id='cmnd' name='cmnd'/>
                                    <ErrorMessage name='cmnd' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="dateOfBirth" className='form-label'>Năm Sinh</label>
                                    <Field type='date' className='form-control' id='dateOfBirth' name='dateOfBirth'/>
                                    <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>
                                </div>

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

                                <div className='mt-3'>
                                    <label htmlFor="nationality" className='form-label'>Quốc Tịch</label>
                                    <Field type='text' className='form-control' id='nationality' name='nationality'/>
                                    <ErrorMessage name='nationality' component='span' className='form-err'/>
                                </div>

                                <div className='mt-3'>
                                    <label htmlFor="company" className='form-label'>Công Ty Làm Việc</label>
                                    <Field type='text' className='form-control' id='company' name='company'/>
                                </div>

                                <div className='mt-3'>
                                    <label htmlFor="part" className='form-label'>Bộ Phận Làm Việc</label>
                                    <Field type='text' className='form-control' id='part' name='part'/>
                                </div>
                                <div>
                                    <div className="form-check">
                                        <Field className="form-check-input" name='insuranceCard' type="checkbox"
                                               id="flexCheckDefault">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Bạn đã có thẻ bảo hiểm chưa</label>
                                    </div>
                                </div>
                                <h3>Địa Chỉ Liên Lạc Tại Việt Nam</h3>
                                <div className='mt-3'>
                                    <label htmlFor="city" className='form-label'>Thành Phố</label>
                                    <Field type='text' className='form-control' id='city' name='city'/>
                                    <ErrorMessage name='city' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="district" className='form-label'>Huyện</label>
                                    <Field type='text' className='form-control' id='district' name='district'/>
                                    <ErrorMessage name='district' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="commune" className='form-label'>Xã</label>
                                    <Field type='text' className='form-control' id='commune' name='commune'/>
                                    <ErrorMessage name='commune' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="homeNumber" className='form-label'>Số Nhà</label>
                                    <Field type='text' className='form-control' id='homeNumber' name='homeNumber'/>
                                    <ErrorMessage name='homeNumber' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="phoneNumber" className='form-label'>Số Điện Thoại</label>
                                    <Field type='text' className='form-control' id='phoneNumber' name='phoneNumber'/>
                                    <ErrorMessage name='phoneNumber' component='span' className='form-err'/>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <Field type='text' className='form-control' id='email' name='email'/>
                                    <ErrorMessage name='email' component='span' className='form-err'/>
                                </div>
                                <div>
                                    <h4>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia vùng lãnh thổ nào ? (Có thể đi
                                        qua nhiều quốc gia)</h4>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <h4>Trong vòng 14 ngày Anh/Chịcoó thấy giấu hiệu nào sau đây không ?</h4>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Sốt' name='signal' type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Sốt</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Ho' name='signal' type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Ho</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Khó Thở' name='signal'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Khó Thở</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Viêm Phổi' name='signal'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Viêm Phổi</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Đau Họng' name='signal'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Đau Họng</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Mệt Mỏi' name='signal'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Mệt Mỏi</label>
                                    </div>
                                </div>

                                <div>
                                    <h4>Trong 14 ngày qua Anh/Chị có tiếp xúc với ?</h4>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Người bệnh' name='contact'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Người bệnh hoặc nghi ngờ mắc bệnh
                                            COVID-19</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Người từ nước ngoài' name='contact'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Người từ nước ngoài mắc bệnh
                                            COVID-19</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" value='Người có biểu hiện' name='contact'
                                               type="checkbox">
                                        </Field>
                                        <label htmlFor="" className='form-label'>Người có biểu hiện (Ho,Sốt,Đau
                                            Họng)</label>
                                    </div>
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
        </>
    )
}