import { useLocation } from "react-router-dom"

function ItemPage(){
    
    const location = useLocation()
    const obj = location.state

    return(
        <div>
            <img src={obj['image']} alt="" />
        </div>
    )
}

export default ItemPage