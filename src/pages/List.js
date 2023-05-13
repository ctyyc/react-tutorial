import React, {useState} from "react";

const List = () => {
    const User = ({userData}) => {
        return (
            <tr>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
            </tr>
        );
    };

    const users = [
        {email:"abc123@gmail.com", name:"홍길동"},
        {email:"qwe456@gmail.com", name:"김길동"},
        {email:"goodgame@gmail.com", name:"이철수"},
        {email:"kingkong@gmail.com", name:"이영희"},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    );
}

export default List;