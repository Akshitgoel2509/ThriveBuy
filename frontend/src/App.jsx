import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ShopPage from './Pages/ShopPage';
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import Product from './Pages/Product.jsx';
import CartPage from './Pages/CartPage.jsx';
import Checkout from './Pages/Checkout.jsx'



function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"/login",
      element:<><Login/></>
    },
    {
      path:"/signup",
      element:<><Signup/></>
    },
    {
      path:"/shop",
      element:<><ShopPage/></>
    },
    {
      path:"/product",
      element:<><Product/></>
    },
    
    // {
    //   path:"/search",
    //   element:<><Search/></>
    // },
    
    {
      path:"/cart",
      element:<><CartPage/></>
    },
    {
      path:"/checkout",
      element:<><Checkout/></>
    }
  ])

  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}/> 
    </Provider>
    </>
  )
}

export default App 
