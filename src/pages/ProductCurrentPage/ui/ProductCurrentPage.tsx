import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../shared/hooks/useAllDispatch/useAppDispatch";
import {getProductCurrent} from "../../../entities/ProductCurrent/model/thunk/productCurrentThunk";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getProductCurrentSelectors} from "../../../entities/ProductCurrent/model/selectors/productCurrentSelector";
import ProductCurrentInfo from "../../../features/ProductCurrentInfo/ui/ProductCurrentInfo";

const ProductCurrentPage = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams<{ id: string }>()
    const furnitureCurrent = useSelector(getProductCurrentSelectors.getProductCurrentFurniture)

    useEffect(() => {
        if (id) {
            dispatch(getProductCurrent(Number(id)))
        }
    }, [dispatch, id]);

    if(!furnitureCurrent){
        return <div style={{display:"flex",margin:"0 auto",color:"#fff",fontSize:40,padding:"4%"}}>Загрузка...</div>
    }

    return (
        <ProductCurrentInfo item={furnitureCurrent}/>
    );
};

export default ProductCurrentPage;