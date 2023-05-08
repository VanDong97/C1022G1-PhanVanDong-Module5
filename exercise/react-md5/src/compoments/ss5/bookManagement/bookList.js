import React, {useEffect, useState} from "react";
import * as bookService from "../../../service/bookService";
import {NavLink} from "react-router-dom";

export function BookList() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll();
            setBook(result);

        }
        fetchApi();
    }, []);
    const handleDeleteBook = async (id) => {
        const result2 = await bookService.findById(id);
        setBook(result2);
    }
    const handleDelete = async () => {
        await bookService.deleteBook(book.id);
    }
    return (
        <>
            <h3>Book List</h3>
            <NavLink to='/create' type="button" className="btn btn-primary float-end mt-2">Add A New Book</NavLink>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>

                </tr>
                </thead>
                <tbody>
                {
                    book?.map((books) => (
                            <tr key={books.id}>
                                <th scope="row">{books.title}</th>
                                <td>{books.quantity}</td>
                                <td>
                                    <NavLink to={`/edit/${books.id}`} type="button"
                                             className="btn btn-primary m-1">Edit</NavLink>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={() => handleDeleteBook(book.id)}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn Có Muốn Xóa Không ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy Bỏ</button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-primary">Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
