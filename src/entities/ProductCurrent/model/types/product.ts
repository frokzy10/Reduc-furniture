import {IProduct} from "../../../ShowProduct";

type TNullable<T> = T | null;

export interface IProductCurrentSchema {
    furniture:TNullable<IProduct[]>,
    error:null | string,
    isLoading:boolean,
}

// Actions/////////
export enum ProductCurrentActions {
    PRODUCT_CURRENT = 'PRODUCT_CURRENT',
    PRODUCT_CURRENT_SUCCESS = "PRODUCT_CURRENT_SUCCESS",
    PRODUCT_CURRENT_ERROR = "PRODUCT_CURRENT_ERROR",
}

export interface productCurrentAction {
    type:ProductCurrentActions.PRODUCT_CURRENT,
}
export interface productCurrentSuccessAction {
    type:ProductCurrentActions.PRODUCT_CURRENT_SUCCESS,
    payload: IProduct[];
}
export interface productCurrentErrorAction {
    type:ProductCurrentActions.PRODUCT_CURRENT_ERROR,
    payload: string;
}

export type TProductCurrentActions = productCurrentAction | productCurrentSuccessAction | productCurrentErrorAction;