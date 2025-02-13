import ShopPage from "./components/ShopPage"
import HomePage from "./components/HomePage"
import ErrorPage from "./components/ErrorPage"
import NavBar from "./components/NavBar"
import CartPage from "./components/CartPage"
import ItemPage from "./components/ItemPage"


const routes =[
    {
        path:"/",
        element:<><NavBar/><ShopPage/></>,
        errorElement:<ErrorPage/>,
        
    },
    {
        path:"HomePage",
        element:<><NavBar/><HomePage/></>,
    },
    {
        path:"CartPage",
        element:<><NavBar/><CartPage/></>
    },
    {
        path:"ItemPage",
        element:<><NavBar/><ItemPage present={'coucou'}/></>
    }

]

export default routes
