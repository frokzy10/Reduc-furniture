import {RouteProps} from "react-router-dom";
import MainPage from "../../../../pages/MainPage/ui/MainPage";
import ProductPage from "../../../../pages/ProductPage/ui/ProductPage";
import ProductCurrentPage from "../../../../pages/ProductCurrentPage/ui/ProductCurrentPage";
import AboutUsPage from "../../../../pages/AboutUsPage/ui/AboutUsPage";


enum AppRoutes {
    MAIN = "main",
    PRODUCTS = "furniture",
    PRODUCT_INFO = "furniture_info",
    ABOUT_US = "about_us"
}

export type AppRoutesProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PRODUCTS]: "/products",
    [AppRoutes.PRODUCT_INFO]: "/products/:id",
    [AppRoutes.ABOUT_US]: "/about_us"
}

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    [AppRoutes.PRODUCTS]: {
        path: RoutePaths.furniture,
        element: <ProductPage/>
    },
    [AppRoutes.PRODUCT_INFO]: {
        path: RoutePaths.furniture_info,
        element: <ProductCurrentPage/>
    },
    [AppRoutes.ABOUT_US]: {
        path: RoutePaths.about_us,
        element: <AboutUsPage/>
    }
}

