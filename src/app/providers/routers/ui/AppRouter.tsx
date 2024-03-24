import React, {useCallback} from 'react';
import {AppRoutesProps, routerConfig} from "../config/routerConfig";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    const render = useCallback((route:AppRoutesProps)=> {
        return(
            <Route
                path={route.path}
                element={route.element}
            />
        )
    },[])

    return (
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;