
import {Form, Link, redirect, type ActionFunction , useNavigate} from 'react-router-dom'
import { Card ,CardHeader, CardContent, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { SubmitBtn , FormInput } from '../components';
import { customFetch } from '../utils';
import {toast} from '../hooks/use-toast'
import { type ReduxStore } from '../store';
import { loginUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hook';
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';



export const action = (store : ReduxStore) : ActionFunction => async ({request}) : Promise<Response | null> => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        const response : AxiosResponse = await customFetch.post(
            '/auth/local',
            data
        )
        const username = response.data.user.username 
        const jwt = response.data.jwt
        store.dispatch(loginUser({username,jwt}))
        return redirect('/')
    }catch(error) {
        toast({description : 'Login Failed'})
        return null
    }
}

const Login = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginAsGuestUser = async () : Promise<void> => {
        try {
            const response = await customFetch.post('/auth/local',{
                identifier : 'text@test.com',
                password : 'secret'
            })
            const username = response.data.user.username
            const jwt = response.data.jwt
            dispatch(loginUser({username,jwt}))
            navigate('/')
        }catch(error) {
            console.log(error)
            toast({description : 'Login Failed'})
        }
    }

    return (
        <section className='h-screen grid place-items-center'>
            <Card className='w-96 bg-muted'>
                <CardHeader>
                    <CardTitle className='text-center' >Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form method='POST'>
                        <FormInput type='email' label='email' name='identifier' />
                        <FormInput type='password' name='password' />
                        <SubmitBtn
                            text='Login'
                            className='w-full mt-4'
                        />
                        <Button 
                            type='button'
                            variant='outline'
                            onClick={loginAsGuestUser}
                            className='w-full mt-4'
                        >
                            Guest User
                        </Button>
                        <p className='text-center mt-4'>
                            Not a member yet?
                            <Button type='button' asChild variant='link'>
                                <Link to='/signup'>Register</Link>
                            </Button>
                        </p>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}

export default Login;