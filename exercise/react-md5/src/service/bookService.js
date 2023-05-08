import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
        return result.data
    } catch (error) {

    }
}
export const createBook = async (bookList) => {
    try {
        await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', {...bookList});
    } catch (error) {

    }
}
export const edit = async (bookList, id) => {
    try {
        await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`, {...bookList})
    } catch (error) {

    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        return result.data;
    } catch (error) {

    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
    } catch (error) {

    }
}