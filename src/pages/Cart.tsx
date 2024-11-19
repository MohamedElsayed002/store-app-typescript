
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hook";
import { CartItemList , SectionTitle , CartTotals} from "../components";



const Cart = () => {

    const user = 'md';

    const numItemsInCart = useAppSelector((state) => state.cartSlice.numItemsInCart)

    if(numItemsInCart === 0) {
        return <SectionTitle text="Empty Cart 😒" />
    }

    return (
        <>
            <SectionTitle text='Shopping Cart' /> 
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemList />
                </div>
                <div className="lg:col-span-4 lg:pl-4">
                    <CartTotals/>
                    {
                        user ? (
                            <Button asChild className="mt-8 w-full">
                                <Link to='/checkout'>Proceed to checkout</Link>
                            </Button>
                        ) : (
                            <Button asChild className="mt-8 w-full">
                                <Link to='/login'>Please Login</Link>
                            </Button>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;