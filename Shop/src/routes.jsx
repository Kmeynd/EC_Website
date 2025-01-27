import ShopPage from "./components/ShopPage"
import HomePage from "./components/HomePage"
import ErrorPage from "./components/ErrorPage"

const routes =[
    {
        path:"/",
        element:<ShopPage/>,
        errorElement:<ErrorPage/>,
        
    },
    {
        path:"HomePage",
        element:<HomePage/>
    }
]

export default routes
