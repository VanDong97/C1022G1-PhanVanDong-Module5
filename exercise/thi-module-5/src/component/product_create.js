// // import * as studentService from "../service/productServive";
// import React, {useEffect, useState} from "react";
// import {useNavigate} from "react-router";
// import * as Yup from "yup";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import {Link} from "react-router-dom";
//
// export function CreateProduct() {
//     const [product, setProduct] = useState([]);
//     const [productType, setProductType] = useState([]);
//     useEffect(() => {
//         const fetchApi = async () => {
//             const result = await studentService.findALl();
//             setProduct(result);
//             const result2 = await studentService.findAllProductType();
//             setProductType(result2);
//         }
//         fetchApi();
//     }, [])
//     const navigate = useNavigate();
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     id: '',
//                     name: '',
//                     date: '',
//                     quantity: '',
//                     productType: ''
//                 }}
//                 validationSchema={Yup.object({
//                     name: Yup.string()
//                         .required("Tên không được để trống !").max(100, "Tên sản phẩm không dài quá 100 ký tự !"),
//                     quantity: Yup.number().integer()
//                         .required("Không được để trống !"),
//                 })}
//                 onSubmit={(values) => {
//                     const createProduct = async () => {
//                         await productService.createProduct(values);
//                         alert("Thêm Mới Thành Công ");
//                         navigate('/')
//                     }
//                     createProduct();
//                 }}
//             >
//                 <Form>
//
//                     <h3 className='text-center'>Thêm Mới Sản Phẩm</h3>
//                     <div className='mt-3'>
//                         <label htmlFor="">Tên Sản Phẩm</label>
//                         <Field name='name' id='name' type='text'/>
//                         <ErrorMessage name='name' component='span' className='form-err'/>
//                     </div>
//
//                     <div className='mt-3'>
//                         <label htmlFor="">Ngày Nhập Sản Phẩm</label>
//                         <Field name='date' id='date' type='date'/>
//                         <ErrorMessage name='date' component='span' className='form-err'/>
//                     </div>
//
//                     <div className='mt-3'>
//                         <label htmlFor="">Số Lượng Sản Phẩm</label>
//                         <Field name='quantity' id='quantity' type='text'/>
//                         <ErrorMessage name='quantity' component='span' className='form-err'/>
//                     </div>
//
//                     <div className="mt-3">
//                         <label>Loại Sản Phẩm</label>
//                         <Field name="productType" as="select">
//                             {productType.map((type, index) => (
//                                 <option key={index} value={type?.id}>
//                                     {type?.name}
//                                 </option>
//                             ))})
//                         </Field>
//                     </div>
//                     <div className='mt-3'>
//                         <button type='submit' className='btn btn-primary'>Xác Nhận</button>
//                         <Link to='/' className='btn btn-primary'>Hủy</Link>
//                     </div>
//                 </Form>
//
//             </Formik>
//         </>
//     )
// }