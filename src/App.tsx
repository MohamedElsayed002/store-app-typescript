import {
  HomeLayout,
  LandingPage,
  Error,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Login,
  Register,
  Orders
} from './pages'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from "./components";


import { loader as LandingLoading } from "./pages/Landing";
import {loader as ProductsLoading} from './pages/Products'
import {loader as SingleProductLoader} from './pages/SingleProduct'
import {loader as CheckoutLoader} from './pages/Checkout'
import {loader as OrdersLoader} from './pages/Orders'


import {action as RegisterAction} from './pages/Register'
import {action as LoginAction} from './pages/Login'
import {action as CheckoutAction} from './components/CheckoutForm'

import { store } from "./store";
const router = createBrowserRouter([
  {
    path : '/',
    element : <HomeLayout/>,
    errorElement : <Error/>,
    children: [
      {
        index : true,
        element : <LandingPage/>,
        loader : LandingLoading
      },
      {
        path : 'products',
        element : <Products/>,
        loader : ProductsLoading
      },
      {
        path : 'products/:id',
        element: <SingleProduct/>,
        loader : SingleProductLoader,
      },
      {
        path : 'cart',
        element : <Cart/>
      },
      {
        path : 'about',
        element : <About/>,
        errorElement : <ErrorElement/>
      },
      {
        path : 'checkout',
        element :  <Checkout/>,
        loader : CheckoutLoader(store),
        action : CheckoutAction(store),
      },
      {
        path : 'orders',
        element : <Orders/>,
        loader : OrdersLoader(store),
      },
    ]
  },
  {
    path : '/login',
    element : <Login/>,
    errorElement : <Error/>,
    action : LoginAction(store),
  },
  {
    path : '/signup',
    element : <Register/>,
    errorElement : <Error/>,
    action : RegisterAction,
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App