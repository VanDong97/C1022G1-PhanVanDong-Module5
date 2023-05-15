import request from "../config/http";
const findAll = () => {
    return request.get(`/product`);
};
const findAllWithPageOrName = ({page,name}) => {
    return request.get(`/product?page=${page ? page : 0}&name=${name}`);
};
const save = (product) => {
    return request.post(`/product`,{...product})
};
const remove = (id) => {
    return request.delete(`/product/${id}`)
};
const findById = (id) => {
    return request.get(`/product/${id}`)
};
const update = (product) => {
    return request.put(`/product`,{...product})
};
const productService = {
    findAll,
    findAllWithPageOrName,
    save,
    remove,
    findById,
    update
}
export default productService;