import React from 'react';
import {IProduct} from "../../../entities/ShowProduct";
import cls from "./Datainfo.module.scss"
import {Link} from "react-router-dom";



const DataInfo = (props: IProduct) => {
    const {id,name,price,images} = props

    return (
        <>
            <Link style={{textDecoration:"none",color:"#000"}} to={`/products/${id}`}>
                <div className={cls.furnitureCard}>
                    <div className={cls.ImgCon}>
                        <img src={images} alt="img"/>
                    </div>
                    <div className={cls.furniturePriceTitle}>
                        <h2>{name}</h2>
                        <h3>{price}$</h3>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default DataInfo;