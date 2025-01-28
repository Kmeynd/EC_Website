import ShopPage from "./components/ShopPage"
import HomePage from "./components/HomePage"
import ErrorPage from "./components/ErrorPage"
import NavBar from "./components/NavBar"


const routes =[
    {
        path:"/",
        element:<><NavBar/><ShopPage/></>,
        errorElement:<ErrorPage/>,
        
    },
    {
        path:"HomePage",
        element:<><NavBar/><HomePage/></>,
    }
]

export default routes
