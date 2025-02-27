import'./CartPage.css'
import { useOutletContext } from "react-router-dom"
import Header from './Header'
import { useState } from 'react'

function CartPage(){
    const [categ, setCateg] = useState('in Cart')
    const item = useOutletContext()
    // console.log(item.numItem.itemBuy)
    const i = 0
    return (
        <>
        <Header  item={item.numItem}/>
        <div className='Cart'>
            <div className='Articles'>
                <h1>Articles in Cart</h1>
                <ul>
                    {item.numItem.itemBuy.map((article,value)=>{
                        return(
                            <li key={value}>
                                <img src={article['image']} alt="" width={50}/>
                                <div>
                                    <p>{article['title']}</p>
                                    <p>{article['price']}$</p>
                                </div>
                                <button onClick={()=>{item.DeleteItem(value)}}>X</button>                       
                            </li>
                        ) 
                        
                    })}
                </ul>
                <h1>Articles Liked</h1>
                <ul>
                    {item.numItem.itemLiked.map((article,value)=>{
                        return(
                            <li key={value}>
                                <img src={article['image']} alt="" width={50}/>
                                <div>
                                    <p>{article['title']}</p>
                                    <p>{article['price']}$</p>
                                </div>
                                <button onClick={()=>{item.DeleteLikedItem(value)}}>X</button>                       
                            </li>
                        ) 
                        
                    })}
                </ul>
            </div>
            <div className='ProceedToPay'>

            </div>
        </div>
        </>
        
    )
}

export default CartPage