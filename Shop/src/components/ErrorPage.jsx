import { Link } from "react-router-dom"

function ErrorPage(){
    return (
        <>
         <h1>You are LOST!</h1>
         <Link to="/">Come back home</Link>
        </>
       
    )
}

export default ErrorPage