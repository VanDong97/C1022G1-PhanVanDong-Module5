import userService from "../../service/userService";
import {GET_ALL_USER, DELETE_USER} from "./types";

export const getAllUser = () => async (dispatch) => {
    try {
        const res = await userService.findAll();

        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        await userService.deleteUSer(id);
        const res = await userService.findAll();
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}