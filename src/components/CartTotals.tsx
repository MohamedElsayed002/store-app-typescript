
import { useAppSelector } from "../hook"
import { formatAsDollars } from "../utils/formatAsDollars"
import { Card , CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"


const CartTotals = () => {

    const {cartTotal,shipping,tax,orderTotal} = useAppSelector((state) => state.cartSlice)


  return (
    <Card className="p-8 bg-muted">
        <CartTotalRow label='Subtotal' amount={cartTotal} />
        <CartTotalRow label='Shipping' amount={shipping} />
        <CartTotalRow label='Tax' amount={tax} />
        <CardTitle className="mt-8">
            <CartTotalRow label='order total' amount={orderTotal} lastRow/>
        </CardTitle>
    </Card>
  )
}

function CartTotalRow({
    label,
    amount,
    lastRow,
  }: {
    label: string;
    amount: number;
    lastRow?: boolean;
  }) {
    return (
      <>
        <p className='flex justify-between text-sm'>
          <span>{label}</span>
          <span>{formatAsDollars(amount)}</span>
        </p>
        {lastRow ? null : <Separator className='my-2' />}
      </>
    );
  }

export default CartTotals