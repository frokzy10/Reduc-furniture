interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    images: string
}

interface IProductSchema {
    furniture: IProduct[] ,
    error: null | string,
    isLoading: boolean
}



// Actions
export enum UserTypeActions {
    PRODUCT = "PRODUCT",
    ERROR_PRODUCT = "ERROR_PRODUCT",
    SUCCESS_PRODUCT = "SUCCESS_PRODUCT"
}

export interface ProductAction {
    type: UserTypeActions.PRODUCT;
}

export interface ErrorProductAction {
    type: UserTypeActions.ERROR_PRODUCT;
    payload: string;
}

export interface SuccessProductAction {
    type: UserTypeActions.SUCCESS_PRODUCT;
    payload: IProduct[];
}

export type TAction = SuccessProductAction | ErrorProductAction | ProductAction;

export type {
    IProduct,
    IProductSchema
}
