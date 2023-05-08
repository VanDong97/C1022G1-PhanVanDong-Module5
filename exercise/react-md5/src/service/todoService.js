import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return result.data
    } catch (error) {
    }
}
export const save = async (toDoList) => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', {...toDoList})
    } catch (error) {

    }
}