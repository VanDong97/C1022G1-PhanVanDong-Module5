import axios from "axios";

export const findAll = async ({page , name}) => {
    try {
        const result = await  axios.get(`http://localhost:8080/product?page=${page ? page : 0}&name=${name}`);
        return result.data
    }catch (error) {
        console.log(error)
    }
}
export const findAllType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/productType`);
        return result.data
    } catch (err) {
        console.log(err)
    }
}
export const findProductById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        return result.data
    } catch (err) {
        console.log(err)
    }
}
export const editProduct = async (product) => {
    try {
        await axios.put(`http://localhost:8080/product`, {...product});
    } catch (err) {
        console.log(err)
    }
}
export const createProduct = async (product) => {
    try {
        await axios.post(`http://localhost:8080/product`, {...product})
    } catch (err) {
        console.log(err)
    }
}
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/product/${id}`)
    } catch (err) {
        console.log(err)
    }
}