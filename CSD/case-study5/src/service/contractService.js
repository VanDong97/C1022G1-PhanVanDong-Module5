import axios from "axios";
import {contract} from "../component/facility/contract/contract";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/contract');
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/contract/${id}`)
        return result.data;
    } catch (error) {
        console.log(error)
    }
}
export const contractCreate = async (contractList) => {
    try {
        await axios.post(`http://localhost:8080/contract`, {...contractList});
    } catch (error) {
        console.log(error)
    }
}
export const contractEdit = async (id,contract) => {
    try {
        await axios.put(`http://localhost:8080/contract/${id}`, {...contract});
    } catch (error) {
        console.log(error)
    }
}
export const deleteContract = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/contract/${id}`);
        alert("Xóa thành công");
    } catch (error) {
        console.log(error)
    }
}
export const findByName = async (nameContract) => {
    try {
       const result  = await axios.get(`http://localhost:8080/contract?shd_like=${nameContract}`);
       return result.data;
    }catch (error) {
        console.log(error)
    }
}