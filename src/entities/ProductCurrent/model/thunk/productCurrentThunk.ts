import {Dispatch} from "redux";
import {ProductCurrentActions, TProductCurrentActions} from "../types/product";
import axios from "axios";

export const getProductCurrent = (id:number) => async (dispatch:Dispatch<TProductCurrentActions>)=>{
    try{
        dispatch({type:ProductCurrentActions.PRODUCT_CURRENT})
        const res = await axios.get(`http://localhost:5000/furniture/${id}`);
        dispatch({type:ProductCurrentActions.PRODUCT_CURRENT_SUCCESS,payload:res.data})
    }catch (e){
        console.error(e)
        dispatch({type:ProductCurrentActions.PRODUCT_CURRENT_ERROR,payload:"Ошибка в id пользователя"})
    }
}