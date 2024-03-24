import {productList} from "../../../../entities/ShowProduct";
import {productCurrentReducer} from "../../../../entities/ProductCurrent/model/reducer/productCurrent";

interface RootState {
    products: typeof productList;
    productCurrent:typeof productCurrentReducer
}
interface IActions  {
    type:string;
    payload?:any
}

export type {
    RootState,
    IActions
}