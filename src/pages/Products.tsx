import { Filters , ProductsContainer , PaginationContainer } from "../components";
import { customFetch , ProductsResponseWithParams, type ProductsRespons } from "../utils";
import { type LoaderFunction } from "react-router-dom";


const url ='/products'

export const loader : LoaderFunction = async ({request}) : Promise<ProductsResponseWithParams> => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ])
    const response = await customFetch<ProductsRespons>(url,{params})
    console.log(response)
    return {...response.data,params}
}


const Products = () => {
    return (
        <>
            <Filters/>
            <ProductsContainer/> 
            <PaginationContainer/>
        </>
    )
}

export default Products;