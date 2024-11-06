import React from "react";
import {Link, Outlet}   from "react-router-dom";

function Users(){
    const users = [
        {id: 1, name: "Paulista"},
        {id: 2, name: "Mineiro"},
        {id: 3, name: "Pernambucano"}
    ];

    return(
        <div>
            <h1>Página de usuários</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
            {/*Posssibilita que seja renderizado abaixo o userDetail*/}
            <Outlet/>
        </div>
    )
}

export default Users;