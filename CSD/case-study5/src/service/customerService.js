import axios from "axios";
export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/customer');
        return result.data;
    }catch (error) {
        console.log(error)
    }
}
export const findAllCustomerType = async () => {
    try {
        const result = await  axios.get('http://localhost:8080/customerType');
        return result.data;
    }catch (error) {
        console.log(error)
    }
}
export const customerCreate = async (customerList) => {
    try {
        await axios.post('http://localhost:8080/customer',{...customerList})
    }catch (error) {
        console.log(error)
    }
}
export const findById = async (id) => {
    try {
       const result = await axios.get(`http://localhost:8080/customer/${id}`)
       return result.data;
    }catch (error) {
        console.log(error)
    }
}
export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/${id}`)
        alert("Xóa thành công");
    }catch (error) {
        console.log(error)
    }
}
export const customerEdit = async (customer) => {
    try {
        await axios.put(`http://localhost:8080/customer/${customer.id}`,{...customer})
    }catch (error) {
        console.log(error)
    }
}
export const findByName = async (nameCustomer) => {
    try {
        const result = await  axios.get(`http://localhost:8080/customer?name_like=${nameCustomer}`);
        return result.data;
    }catch (error) {
        console.log(error)
    }
}