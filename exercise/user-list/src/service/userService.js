import request from '../http-common';

const findAll = () => {
    return request.get('/users')
}
const deleteUSer = (id) => {
    return request.delete(`/users/${id}`)
}
const userService = {
    findAll,
    deleteUSer
}
export default userService;