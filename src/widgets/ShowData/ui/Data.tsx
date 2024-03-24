import React from 'react';
import {IProduct} from "../../../entities/ShowProduct";
import cls from "./Data.module.scss"

interface IProductProps {
    render: (item: IProduct) => React.ReactElement,
    list: IProduct[]
}

const Data = (props: IProductProps) => {
    const {list, render} = props;

    return (
        <div className={cls.furnitureContainer}>
            <h2 className={cls.furnitureTitle}>Товары</h2>
            <div className={cls.furnitureList}>
                {list.map(item => <li key={item.id}>{render(item)}</li>)}
            </div>
        </div>
    );
};

export default Data;