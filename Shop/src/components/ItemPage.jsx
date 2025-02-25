import { useLocation, useOutletContext } from "react-router-dom"
import './ItemPage.css'
import { useState } from "react"
import Header from "./Header"

function ItemPage(){
    
    const location = useLocation()
    const obj = location.state
    const item = useOutletContext()

    return(
        <div>
            <Header item={item.numItem}/>
            <div className="ItemDisplay">
                <img src={obj['image']} alt=""/>
                <div className="ItemDisplayDescription">
                    <h1>{obj['title']}</h1>
                    <p>{obj['description']}</p>
                    <p>{obj['price']} $</p>
                    <button onClick={()=>{item.AddItem(obj,obj['price'])}}>Add to the cart</button>
                </div>
            </div>
        </div>
       
    )
}

export default ItemPage