import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { productList } from "../../../../entities/ShowProduct";
import { RootState } from "./StoreSchema";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {productCurrentReducer} from "../../../../entities/ProductCurrent/model/reducer/productCurrent";


const rootReducer = combineReducers<RootState>({
    products: productList,
    productCurrent:productCurrentReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export type RootReducerState = ReturnType<typeof rootReducer>;
export const typedUseSelector: TypedUseSelectorHook<RootReducerState> = useSelector;

export { store, rootReducer };
export type AppDispatch = typeof store.dispatch;