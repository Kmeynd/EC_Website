import { Link } from "react-router-dom"

function ErrorPage(){
    return (
        <div className="Error">
            <h1>It looks like you are lost...</h1>
            <Link to="/">Come back home</Link>
        </div>
       
    )
}

export default ErrorPage