import request from "../config/http"
const findAll = () => {
    return request.get(`/product`)
}
const save = (product) =>{
    return request.post(`/product`,{...product})
}
const findByName = (name) => {
    return request.get(`/product?name_like=${name}`)
}
const findAllType = () => {
    return request.get(`/product-type`)
}
const productService = {
    findAll,save,findByName,
    findAllType
}
export default productService;