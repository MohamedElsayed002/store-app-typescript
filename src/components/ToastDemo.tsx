

import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";


export const ToastDemo = () => {
    const {toast} = useToast()

    return (
        <Button
            onClick={() => {
                toast({
                    title : 'Scheduled Catch up',
                    description : "Friday"
                })
            }}
        >
            Show Toast
        </Button>
    )
}
