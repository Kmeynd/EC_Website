import'./CartPage.css'
import { useOutletContext,Link } from "react-router-dom"
import Header from './Header'

function CartPage(){

    const item = useOutletContext()
    
    let itemarr = []
    function count(input){ 
        return item.numItem.itemBuy.filter(x => x.id === input.id).length
    }
   
    return (
        <div className='bgCart'>
        <Header  item={item.numItem}/>
        <div className='Cart'>
            <div className='Articles'>
                <h1>Articles in Cart</h1>
                <ul>
                    {item.numItem.itemBuy.map((article,value)=>{
                        if(!itemarr.includes(article.id)){
                            itemarr.push(article.id)
                            return(
                                <li key={value}>
                                    <img src={article['image']} alt="" width={50}/>
                                    <div>
                                        <p>{article['title']}</p>
                                        <p>Article(s): {count(article)} / <b>{article['price']}$</b></p>
                                    </div>
                                    <button onClick={()=>{item.DeleteItem(value)}}>X</button>                       
                                </li>
                            ) 
                        }
                        
                        
                    })}
                </ul>
                <h1>Articles Liked</h1>
                <ul>
                    {item.numItem.itemLiked.map((article,value)=>{
                        return(
                            <li key={value}>
                                <Link to='/ItemPage' state={article} className='LinkLike'>
                                    <img src={article['image']} alt="" width={50}/>
                                    <div>
                                        <p>{article['title']}</p>
                                        <p><b>{article['price']}$</b></p>
                                    </div>
                                </Link>
                                <button onClick={()=>{item.DeleteLikedItem(value)}}>X</button>                       
                            </li>
                        ) 
                        
                    })}
                </ul>
            </div>
            <div className='ProceedToPay'>
                <h1>Summary</h1>
                <div className='Promo'>
                    <p>Promo code:</p>
                    <input placeholder="Enter it here" type='text' />
                    <button>Apply</button>
                </div>
                <p>Tax: 0$</p>
                <p>Total: {item.numItem.price}$</p>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
        </div>
        
    )
}

export default CartPage