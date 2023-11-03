import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { userService } from '@/_services/user.service'

const User = () => {

    let navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(res => {
                console.log(res.data.data)
                setUsers(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    /*     const marcel = (userId) => {
            navigate("../edit/" + userId);
        }
     */
    return (
        <div className='User'>
            User Liste
            {/*<button onClick={() => marcel(4)}>User 4</button>*/}
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default User;