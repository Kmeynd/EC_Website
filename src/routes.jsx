import ShopPage from "./components/ShopPage"
import HomePage from "./components/HomePage"
import ErrorPage from "./components/ErrorPage"
import CartPage from "./components/CartPage"
import ItemPage from "./components/ItemPage"


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

]

export default routes
