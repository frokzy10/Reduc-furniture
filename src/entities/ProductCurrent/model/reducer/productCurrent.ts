import {IProductCurrentSchema, ProductCurrentActions} from "../types/product";
import {IActions} from "../../../../app/providers/StoreProvider/config/StoreSchema";


const initialState:IProductCurrentSchema = {
    furniture:null,
    isLoading:false,
    error:null,
}

export const productCurrentReducer = (state = initialState, action: IActions): IProductCurrentSchema => {
    switch (action.type) {
        case ProductCurrentActions.PRODUCT_CURRENT:
            return {
                ...state,
                isLoading: true,
                error: null,
                furniture: null
            };
        case ProductCurrentActions.PRODUCT_CURRENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                furniture: action.payload
            };
        case ProductCurrentActions.PRODUCT_CURRENT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                furniture: null
            };
        default:
            return state;
    }
};

