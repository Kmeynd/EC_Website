import'./CartPage.css'
import { useOutletContext } from "react-router-dom"
import Header from './Header'

function CartPage(){

    const item = useOutletContext()
    // console.log(item.numItem.itemBuy)
    const i = 0
    return (
        <>
        <Header  item={item.numItem}/>
        <div className='Cart'>
            <div className='Articles'>
                <ul>
                    {item.numItem.itemBuy.map((article,value)=>{
                        console.log(value)
                        return(
                            <li key={value}>
                                <img src={article['image']} alt="" width={50}/>
                                <p>{article['title']}</p>
                                <button onClick={()=>{item.DeleteItem(value)}}>Delete</button>                       
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