import request from "../config/http";
const findAll = () => {
    return request.get(`/productType`)
}
const productTypeService = {
    findAll
}
export default productTypeService;