import'./CartPage.css'
import { useOutletContext } from "react-router-dom"
import Header from './Header'

function CartPage(){

    const item = useOutletContext()
    console.log(item.numItem.itemBuy)

    return (
        <>
        <Header  item={item.numItem}/>
        <div className='Cart'>
            <div className='Articles'>
                <ul>
                    {item.numItem.itemBuy.map((article)=>{
                        return(
                            <li key={article['title']}>
                                <img src={article['image']} alt="" width={50}/>
                                <p>{article['title']}</p>                       
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