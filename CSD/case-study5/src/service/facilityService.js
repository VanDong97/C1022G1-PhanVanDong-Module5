import axios from "axios";
export const findAll = async () => {
    try {
        const result = await axios.get(' http://localhost:8080/facility')
        return result.data;
    }catch (error) {
        console.log(error)
    }
}