import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '@/_services'

const UserEdit = () => {
    // navigation
    let navigate = useNavigate();

    const [user, setUser] = useState([])
    // récupération de l'id dans l'url
    const { uid } = useParams();
    // permet de ne pas avoir un double appel
    const flag = useRef(false)

    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        userService.updateUser(user)
            .then(res => {
            navigate('../index')  
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        // permet de ne pas avoir un double appel
        if (flag.current === false) {
            userService.getUser(uid)
                .then(res => {
                    console.log(res.data.data)
                    setUser(res.data.data)
                })
                .catch(err => console.log(err))
        }
        // fonction de nettoyage permet de ne pas faire de double appel
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='UserEdit'>
            UserEdit
            <form onSubmit={onSubmit}>
                
            <div className="group">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name="pseudo" defaultValue={user.pseudo} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" defaultValue={user.email} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;