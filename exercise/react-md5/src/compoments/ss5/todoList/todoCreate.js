import React from "react";
import * as todoService from '../../../service/todoService';
import {Form, Formik} from "formik";

export function TodoCreate() {
    return (
        <>
            <Formik
                initialValues={{
                    title: ''
                }}

                onSubmit={(values, {setSubmitting}) => {
                    const create = async () => {
                        await todoService.save(values)
                        setSubmitting(false)
                        alert("Oke")
                    }
                    create();
                }}
            >
                <Form>
                    <input name='title' type="text"/>
                    <button type='submit'>Submit</button>

                </Form>

            </Formik>
        </>
    )
}