import * as bookService from "../../../service/bookService";
import React from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";

export function BookCreate() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    quantity: ''
                }}
                onSubmit={values => {
                    const create = async () => {
                        await bookService.createBook(values)
                        alert("Thêm mới thành công")
                        navigate('/');
                    }
                    create();
                }}
            >
                <Form>
                    <h1>Add A New Book</h1>
                    <div className='mt-3'>
                        <label htmlFor="title">Title</label><br/>
                        <Field name='title' type="text"/>
                    </div>

                    <div className='m-3'>
                        <label htmlFor="quantity">Quantity</label><br/>
                        <Field name='quantity' type='text'/>
                    </div>
                    <div className='m-3'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}