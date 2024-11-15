
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
const Cart = () => {
    return (
        <div>
            <h1 className="text-4xl">Cart Page</h1>
            <Link to="/" className="text-7xl text-red-800">
            back home
            </Link>
            <Button asChild size='lg'>
                <Link to='/'>Home Button</Link>
            </Button>
         </div>
    )
}

export default Cart;