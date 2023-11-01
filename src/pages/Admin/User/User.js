import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const User = () => {

    let navigate = useNavigate()
    
    useEffect(() => {
        console.log('useEffect')
    }, [])

    const marcel = (userId) => {
        navigate("../edit/" + userId);
    }

    return (
        <div className='User'>
            User Liste
            <button onClick={() => marcel(4)}>User 4</button>
        </div>
    );
};

export default User;