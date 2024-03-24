
import {IProductSchema, UserTypeActions} from "../types/product";
import {IActions} from "../../../../app/providers/StoreProvider/config/StoreSchema";


const initialState: IProductSchema = {
    furniture: [],
    error: null,
    isLoading: false
};


export const productList = (state = initialState, action:IActions):IProductSchema => {
    switch (action.type) {
        case UserTypeActions.PRODUCT:
            return {
                error:null,isLoading:true,furniture: []
            }
        case UserTypeActions.SUCCESS_PRODUCT:
            return {
                error:null,isLoading:false,furniture: action.payload
            }
        case UserTypeActions.ERROR_PRODUCT:
            return {
                error: action.payload,isLoading:false,furniture:[]
            }
        default:
            return state;
    }
};

