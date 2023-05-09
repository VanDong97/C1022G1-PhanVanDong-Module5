import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getAllUser} from "../redux/action/user";


export function UserList() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUser())
    }, []);

    const deleteHandle = async (id) => {
        dispatch(deleteUser(id));
    }

    return (
        <>
            <table className='table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(value => (
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.website}</td>
                            <td>
                                <a onClick={() => {
                                    deleteHandle(value?.id)
                                }} className="btn btn-danger">Xóa</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}