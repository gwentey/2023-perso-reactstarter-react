import Axios from './caller.service'

let getAllUsers = async () => {
    const {data} = await Axios.get('/users')
    return data
}

let getUser = (uid) => {
    return Axios.get('/users/' + uid)
}

export const userService = {
    getAllUsers, getUser
}