import request from "../config/http"
const findAll= () => {
    return request.get(`/product-type`)
}
const productTypeService ={
    findAll
}
export default productTypeService;