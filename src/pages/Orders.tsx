
import { LoaderFunction, redirect , useLoaderData } from "react-router-dom";
import {toast} from '../hooks/use-toast'
import { customFetch } from "../utils";
import { OrdersList, SectionTitle  } from "../components";
import { ReduxStore } from "../store";
import { type OrdersResponse } from "../utils";


export const loader = (store : ReduxStore) : LoaderFunction => async ({request}) : Promise<OrdersResponse | null | Response> => {
    const user = store.getState().userSlice.user

    if(!user) {
        toast({description : "Please login to continue"})
        return redirect('/login')
    }
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries()
    ])

    try {
        const response = await customFetch.get<OrdersResponse>('/orders',{
            params,
            headers : {
                Authorization : `Bearer ${user.jwt}`
            }
        })
        return {...response.data}
    }catch(error) {
        toast({description : "Failed to fetch orders"})
        return null
    }
}
const Orders = () => {

    const {meta }= useLoaderData() as OrdersResponse
    console.log(meta)
    return (
        <>
            <SectionTitle text='Your Orders'/>
            <OrdersList/>
            {/* <PaginationContainer/> */}
        </>
    )
}

export default Orders;