import axios from "axios";
export const findAll = async () => {
    try {
        const result = await axios.get(' http://localhost:8080/facility')
        return result.data;
    }catch (error) {
        console.log(error)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/facility/${id}`);
        return result.data;
    }catch (error) {
        console.log(error)
    }
}
export const facilityCreate = async (facility) => {
    try {
        await axios.post(`http://localhost:8080/facility`,{...facility});
    }catch (error) {
        console.log(error)
    }
}
export const facilityEdit = async (facility) => {
    try {
        await axios.put(`http://localhost:8080/facility/${facility.id}`,{...facility});
    }catch (error) {
        console.log(error)
    }
}
export const deleteFacility = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/facility/${id}`)
        alert("Xóa thành công")
    }catch (error) {
        console.log(error)
    }
}