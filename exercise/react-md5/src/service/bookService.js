import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/book');
        return result.data
    } catch (error) {

    }
}
export const createBook = async (bookList) => {
    try {
        await axios.post('http://localhost:8080/book', {...bookList});
    } catch (error) {

    }
}
export const edit = async (book) => {
    try {
        await axios.put(`http://localhost:8080/book/${book.id}`, {...book})
    } catch (error) {
        console.log(error)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/book/${id}`);
        return result.data;
    } catch (error) {

    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/book/${id}`)
        alert("Xóa thành công")
    } catch (error) {
        console.log(error)
    }
}