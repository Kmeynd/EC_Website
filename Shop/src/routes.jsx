import ShopPage from "./components/ShopPage"
import HomePage from "./components/HomePage"
import ErrorPage from "./components/ErrorPage"
import NavBar from "./components/NavBar"
import CartPage from "./components/CartPage"
import ItemPage from "./components/ItemPage"
import Header from "./components/Header"

const routes =[
    {
        path:"/",
        element:<><ShopPage/></>,
        errorElement:<ErrorPage/>,
        children: [
            { path: "HomePage", element: <HomePage/> },
            { path: "CartPage", element: <CartPage/> },
            { path: "ItemPage", element: <ItemPage/> },
          ],
        
    },
    // {
    //     path:"HomePage",
    //     element:<><NavBar/><HomePage/></>,
    // },
    // {
    //     path:"CartPage",
    //     element:<><NavBar/><CartPage/></>
    // },
    // {
    //     path:"ItemPage",
    //     element:<><NavBar/><ItemPage/></>
    // }

]

export default routes
