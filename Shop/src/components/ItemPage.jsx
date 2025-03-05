import { useLocation, useOutletContext } from "react-router-dom"
import './ItemPage.css'
import Header from "./Header"

function ItemPage(){
    
    const location = useLocation()
    const obj = location.state
    const item = useOutletContext()

    return(
        <div>
            <Header item={item.numItem} />
            <div className="ItemDisplay">
                <img src={obj['image']} alt=""/>
                <div className="ItemDisplayDescription">
                    <h1>{obj['title']}</h1>
                    <p>{obj['description']}</p>
                    <h3>{obj['price']} $</h3>
                    <button onClick={()=>{item.LikeItem(obj)}} >Like</button>
                    <button onClick={()=>{item.AddItem(obj)}}>Add to the cart</button>
                </div>
            </div>
        </div>
       
    )
}

export default ItemPage