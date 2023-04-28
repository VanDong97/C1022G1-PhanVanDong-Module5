import "./studentInfo.css"
import React from "react";

function StudentInfo() {
    const studentInfo = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            age: '30',
            address: 'Đà Nẵng'
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            age: '31',
            address: 'Huế'
        },
        {
            id: 3,
            name: 'Nguyễn Văn C',
            age: '32',
            address: 'Quảng Trị'
        },
        {
            id: 4,
            name: 'Nguyễn Văn D',
            age: '33',
            address: 'Quảng Ngãi'
        },
        {
            id: 5,
            name: 'Nguyễn Văn E',
            age: '35',
            address: 'Quảng Nam'
        },
    ]
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                </tr>
                </thead>
                <tbody>
                {studentInfo.map((studentInfo) => {
                    return (
                        <tr>
                            <td>{studentInfo.id}</td>
                            <td>{studentInfo.name}</td>
                            <td>{studentInfo.age}</td>
                            <td>{studentInfo.address}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default StudentInfo;