import React, {useLayoutEffect} from 'react';
import Data from "../../../widgets/ShowData/ui/Data";
import {getProductSelectors} from "../../../entities/ShowProduct/model/selectors/selectorProduct";
import {getProduct} from "../../../entities/ShowProduct/model/thunk/getProduct";
import {IProduct} from "../../../entities/ShowProduct";
import DataInfo from "../../../features/DataInfo/ui/DataInfo";
import {useAppDispatch} from "../../../shared/hooks/useAllDispatch/useAppDispatch";
import {typedUseSelector} from "../../../app/providers/StoreProvider/config/store";

const ProductPage = () => {
    const furniture = typedUseSelector(getProductSelectors.getProductListProduct)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);

    if(!furniture.length){
        return <div style={{display:"flex",margin:"0 auto",color:"#fff",fontSize:40,padding:"4%"}}>Загрузка...</div>
    }

    return (
        <>
            <Data
                list={furniture}
                render={(item:IProduct)=>(
                    <DataInfo
                        id={item.id}
                        name={item.name}
                        images={item.images}
                        description={item.description}
                        price={item.price}
                        key={item.id}
                    />
                )}
            />
        </>
    );
};

export default ProductPage;