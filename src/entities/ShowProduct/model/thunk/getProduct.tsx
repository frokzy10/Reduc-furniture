import axios from "axios";
import {Dispatch} from "redux";
import {TAction, UserTypeActions} from "../types/product";


export const getProduct = () => async (dispatch: Dispatch<TAction>) => {
    try {
        dispatch({type: UserTypeActions.PRODUCT})
        const res = await axios.get("http://localhost:5000/furniture");
        dispatch({ type: UserTypeActions.SUCCESS_PRODUCT,payload:res.data});
    } catch (error) {
        console.error("Error fetching product:", error);
        dispatch({
            type:UserTypeActions.ERROR_PRODUCT,
            payload:"Произошла ошибка при загрузке пользователей"
        })
    }
};