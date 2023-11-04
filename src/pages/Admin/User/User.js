import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { userService } from '@/_services'

const User = () => {

    const [users, setUsers] = useState([])
    // permet de ne pas avoir un double appel
    const flag = useRef(false)

    useEffect(() => {
        // permet de ne pas avoir un double appel
        if(flag.current === false){
        userService.getAllUsers()
            .then(res => {
                console.log(res.data.data)
                setUsers(res.data.data)
            })
            .catch(err => console.log(err))
        }
        // fonction de nettoyage permet de ne pas faire de double appel
        return () => flag.current = true
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
                        <th>Pseudo</th>
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
                                <td><Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link></td>
                                <td>{user.pseudo}</td>
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