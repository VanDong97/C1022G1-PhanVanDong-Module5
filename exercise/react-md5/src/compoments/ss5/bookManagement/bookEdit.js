import * as bookService from '../../../service/bookService';
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router";

export function BookEdit() {
    const param = useParams();
    const [book, setBook] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findById(param.id);
            setBook(result);
        };
        fetchApi();
    }, []);
    if (!book) return null;
    return (
        <>
            <Formik
                initialValues={{
                    id : book?.id,
                    title: book?.title,
                    quantity: book?.quantity
                }}
                onSubmit={(values) => {
                    const edit = async () => {
                        await bookService.edit(values);
                        alert("Chỉnh Sửa Thành Công");
                        navigate('/');
                    };
                    edit();
                }}
            >
                <Form>
                    <h1>Edit Book</h1>
                    <div className='mt-3'>
                        <label htmlFor="title">Title</label><br/>
                        <Field name='title' type="text"/>
                    </div>

                    <div className='m-3'>
                        <label htmlFor="quantity">Quantity</label><br/>
                        <Field name='quantity' type='text'/>
                    </div>
                    <div className='m-3'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}