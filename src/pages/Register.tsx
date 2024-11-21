import { ActionFunction, Form, Link, redirect } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { SubmitBtn, FormInput } from "../components";
import { customFetch } from "../utils";
import { toast } from '../hooks/use-toast'
import { AxiosError } from "axios";


export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        await customFetch.post('/auth/local/register', data)
        toast({ description: ' Registered' })
        return redirect('/login')
    } catch (error) {
        console.log(error);

        const errorMsg =
            error instanceof AxiosError
                ? error.response?.data.error.message
                : 'Registration Failed';
        toast({ description: errorMsg });
        return null;
    }

};


const Register = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Card className="w-96 bg-muted">
                <CardHeader>
                    <CardTitle className="text-center">Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form method="post">
                        <FormInput
                            type='text'
                            name='username'
                            defaultValue="enter your name"
                        />
                        <FormInput
                            type='email'
                            name='email'
                            defaultValue="test@test.com"
                        />
                        <FormInput
                            type='password'
                            name='password'
                            defaultValue="Password"
                        />
                        {/* <Button type='submit' variant='default' className="w-full mt-4">
                            Submit
                        </Button> */}
                        <SubmitBtn   text='Register'  className="w-full mt-4"/>

                        <p className="text-center mt-4">
                            Already a member?
                            <Button type="button" asChild variant='link'>
                                <Link to='/login'>Login</Link>
                            </Button>
                        </p>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}

export default Register;