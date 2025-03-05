import { Link, useLocation } from 'react-router-dom'
import  Video  from '../assets/BgdVideo.mp4'
import shop from '../assets/shop.png'
import './ShopPage.css'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'

export const MyContext = createContext();

function ShopPage() {
  const [theme, setTheme] = useState('Display')
  const [numItem, plusItem] = useState({itemBuy:[],itemLiked:[], price:0})
  const loctheme = useLocation()

  useEffect(() => {
    if (loctheme.pathname=='/'){
      setTheme('Display')
    }else{
      setTheme('NoDisplay')
    }
  },[loctheme.pathname])
  
  function AddItem(obj){
    plusItem({itemBuy:[...numItem['itemBuy'],obj],itemLiked:[...numItem['itemLiked']],price:(parseFloat(numItem['price'])+obj.price).toFixed(2)})
  }

  function DeleteItem(value){
    let newarray
    let objPrice
    newarray = numItem.itemBuy.toSpliced(value,1)
    objPrice = numItem.itemBuy.at(value).price

    if (parseFloat(numItem['price']-objPrice).toFixed(2)==0.00){
      plusItem({itemBuy:newarray,itemLiked:[...numItem['itemLiked']],price:'0'})
    }else{
      plusItem({itemBuy:newarray,itemLiked:[...numItem['itemLiked']],price:parseFloat(numItem['price']-objPrice).toFixed(2)})
    }
  }

  function LikeItem(obj){
    const arrId = numItem.itemLiked.map(x => x.id)
    if(!arrId.includes(obj.id)){
      plusItem({itemBuy:[...numItem['itemBuy']],itemLiked:[...numItem['itemLiked'],obj],price:numItem['price']})
    }
  }
  function DeleteLikedItem(value){
    let newarray
    if(value==0){
      newarray = numItem.itemLiked.toSpliced(value,1)
    }else{
      newarray = numItem.itemLiked.toSpliced(value,value)
    }
    plusItem({itemBuy:[...numItem['itemBuy']],itemLiked:newarray,price:numItem['price']})
    
  }
  
  return (
    <>
    <div className='Route'>
        <Outlet context={{numItem:numItem,AddItem:AddItem,LikeItem:LikeItem,DeleteItem:DeleteItem,DeleteLikedItem:DeleteLikedItem}}/>
    </div>
    <NavBar/>
    <div className={theme}>
    <div className='Content'>
      <img src={shop} alt="Shop" width={200} className='ShopPageImg'/>
      <Link to="HomePage" className='Link'>See Products</Link>
    </div>
    <div className='Overlay'></div>
    <video src={Video} autoPlay loop muted/>
    </div>
    

    </>
  )
}

export default ShopPage
