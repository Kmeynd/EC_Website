import { useLocation, useOutletContext } from "react-router-dom"
import './ItemPage.css'
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

function ItemPage(){
    window.scrollTo(0,0)
    
    const location = useLocation()
    const obj = location.state
    const item = useOutletContext()
    const [numArt, setNumArt] = useState(1)

    function changeNum(){
        setNumArt(numArt + 1)
    }

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
                    <button onClick={()=>{item.AddItem(obj,numArt)}}>Add to the cart</button>
                    <input type="number" value={numArt} onChange={()=>{changeNum()}}/>
                </div>
            </div>
            <Footer/>
        </div>
       
    )
}

export default ItemPage