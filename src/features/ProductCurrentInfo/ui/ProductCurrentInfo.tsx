import React from 'react';
import {IProduct} from "../../../entities/ShowProduct";
import cls from "./ProductCurrentInfo.module.scss"

interface IProductCurrentProps {
    item: IProduct
}

const ProductCurrentInfo = (props: IProductCurrentProps) => {
    const {item} = props;

    return (
        <div className={cls.ProductInfoContainer}>
            <div className={cls.left}>
                <img src={item?.images} alt="img"/>
            </div>
            <div className={cls.right}>
                <h2>{item?.name}</h2>
                <p>{item?.description}</p>
                <div>{item?.price}$</div>
            </div>
        </div>
    );
};

export default ProductCurrentInfo;