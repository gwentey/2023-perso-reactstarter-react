import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { userService } from '@/_services/user.service'

const User = () => {

    // let navigate = useNavigate()
    // const [users, setUsers] = useState([])

    // permet de limiter l'appel à une fois
    // const flag = useRef(false)

    const {isLoading, data} = useQuery('users', () => userService.getAllUsers())
    const users = data || {"data": []}

/*     useEffect(() => {
        if (flag.current === false) {
            userService.getAllUsers()
                .then(res => {
                    console.log(res.data.data)
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err))
        }
        // fonction de nettoyage React : permet de limiter l'appel à une fois
        return () => flag.current = true
    }, []) */

    /*     const marcel = (userId) => {
            navigate("../edit/" + userId);
        }
     */

    if(isLoading){
        return <div>Loading ...</div>
    }
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
                        users.data.map(user => (
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