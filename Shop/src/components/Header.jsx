import './Header.css'
import heart from '../assets/heart.png'
import dollar from '../assets/dollar.png'
import shop from '../assets/shop.png'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'



function Header(prop){
    const url = 'https://fakestoreapi.com/products'
    const [itemSearch, setItemSearch] = useState('')
    const [searching, setSearching] = useState('NotSearching')
    const [data, setData] = useState("Loading")
   
    useEffect(()=>{
        fetch(`${url}`)
            .then(res=>res.json())
            .then(json=>{
                let filtobj = Object.values(json).filter(x=> x.title.toLowerCase().includes(itemSearch.toLowerCase()))
                if (filtobj==''){
                    filtobj = {}
                    filtobj.title = 'void'
                    filtobj = [filtobj]
                }
                setData(filtobj)
                
            })
        if(itemSearch==''){
            setSearching('NotSearching')
        }
           
    
        
    },[itemSearch])


    function changeInput (e){
        // Have to enable user from looking up while content is loading
        if(data!='Loading'){
        setItemSearch(e.target.value)
        setSearching('Searching')
        } 
    }

    if(searching=='Searching'){
        return (
            <div className='Header'>
                <div className='logo'>
                    <img src={shop} alt="Shop"/>
                </div>
                <div className='SearchBar'>
                    <input  type="text" placeholder='Search anything...' onChange={()=>{changeInput(event)}}/>
                </div>
                <div className='SavedItems'>
                    <Link to={"/CartPage"} className='LinkHeader'>
                        <p>{prop.item.itemLiked.length}</p>
                        <img src={heart} alt="<3" width={25} />
                    </Link>
                    <Link to={"/CartPage"} className='LinkHeader'>
                        <p>{prop.item.price}</p>
                        <img src={dollar} alt="$" width={25} />
                    </Link>
                </div>
                <div className={searching}>
                        {
                            data.map((article) => {                              
                                if(article['title']=='void'){
                                  return <h2 key={article['title']}>Sorry, we couldn't find anything</h2>  
                                }
                                return(
                                    <li key={article['title']}>
                                        <Link to='/ItemPage' state={article} className='LinkSearchBar' onClick={()=>{setSearching('NotSearching')}}>
                                            <img src={article['image']} alt="" />
                                            <p>{article['title']}</p>
                                        </Link>
                                    </li>
                                
                                )
                            })
                        } 
                </div>
                <div className='Unfocus'>

                </div>
            </div>
        )

    }

    return (
        <div className='Header'>
            <div className='logo'>
                <img src={shop} alt="Shop"/>
            </div>
            <div className='SearchBar'>
                <input  type="text" placeholder='Search anything...' onChange={()=>{changeInput(event)}} />
            </div>
            <div className='SavedItems'>
                <Link to={"/CartPage"} className='LinkHeader'>
                    <p>{prop.item.itemLiked.length}</p>
                    <img src={heart} alt="<3" width={25} />
                </Link>
                <Link to={"/CartPage"} className='LinkHeader'>
                    <p>{prop.item.price}</p>
                    <img src={dollar} alt="$" width={25} />
                </Link>
            </div>
        </div>
    )
}

export default Header