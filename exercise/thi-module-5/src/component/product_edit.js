// // import * as productService from '../service/productServive';
// import {useNavigate, useParams} from "react-router";
// import React, {useEffect, useState} from "react";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup";
// import {Link} from "react-router-dom";
//
// export function ProductEdit() {
//     const param = useParams();
//     const [product, setProduct] = useState();
//     const [productType, setProductType] = useState([]);
//     const navigate = useNavigate();
//     useEffect(() => {
//         const fetchApi = async () => {
//             const result = await productService.findById(param.id);
//             setProduct(result);
//             const result2 = await productService.findAllProductType();
//             setProductType(result2);
//         };
//         fetchApi();
//     }, [param.id]);
//     if (!product) {
//         return null
//     }
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     id: product?.id,
//                     name: product?.name,
//                     date: product?.date,
//                     quantity: product?.quantity,
//                     productType: product?.productType
//                 }}
//                 validationSchema={Yup.object({
//                     name: Yup.string()
//                         .required("Tên không được để trống !").max(100, "Tên sản phẩm không dài quá 100 ký tự !"),
//                     quantity: Yup.number().integer()
//                         .required("Không được để trống !"),
//                 })}
//                 onSubmit={(values) => {
//                     const editProduct = async () => {
//                         await productService.editProduct(values);
//                         alert("Chỉnh Sửa Thành Công ");
//                         navigate('/')
//                     }
//                     editProduct();
//                 }}
//             >
//                 <Form>
//
//                     <h3 className='text-center'>Chỉnh Sửa Sản Phẩm</h3>
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
//             </Formik>
//         </>
//     )
// }