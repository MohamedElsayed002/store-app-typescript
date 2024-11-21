
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormInputProps = {
    name : string;
    type : string;
    label ?: string;
    defaultValue?: string;
}

const FormInput = ({label,name,type,defaultValue} : FormInputProps) => {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="capitalize">
                {label || name}
            </label>
            <Input 
                id={name}
                name={name}
                type={type}
                // defaultValue={defaultValue}
                className="border border-gray-300 "
                placeholder={defaultValue}
            />
        </div>
    )
}

export default FormInput