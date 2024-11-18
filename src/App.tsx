import { Check } from "lucide-react";
import { Button } from "./components/ui/button";
import { useAppSelector } from "./hook";
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
        element :  <Checkout/>
      },
      {
        path : 'orders',
        element : <Orders/>
      },
    ]
  },
  {
    path : '/login',
    element : <Login/>,
    errorElement : <Error/>,
  },
  {
    path : '/signup',
    element : <Register/>,
    errorElement : <Error/>,

  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App