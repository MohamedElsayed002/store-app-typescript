
import { customFetch , type ProductsRespons } from '../utils/index';
import { Hero , FeaturedProducts } from "../components";
import { useLoaderData , type LoaderFunction } from "react-router-dom";


const url = '/products?featured=true'

export const loader : LoaderFunction = async () : Promise<ProductsRespons> => {
    const response = await customFetch<ProductsRespons>(url)
    return {...response.data}
}

const LandingPage = () => {

    const result = useLoaderData() as ProductsRespons
    console.log(result)

    return (
        <>
            <Hero/>
            <FeaturedProducts/>
        </>
    )
}

export default LandingPage;