import { Link, useLocation } from 'react-router-dom'
import  Video  from '../assets/BgdVideo.mp4'
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
                                    // Fix price when adding and deleting items
  function AddItem(obj){
    plusItem({itemBuy:[...numItem['itemBuy'],obj],itemLiked:[...numItem['itemLiked']],price:parseFloat(numItem['price']+obj.price)})
  }
  function DeleteItem(value){
    let newarray
    let objPrice
    if(value==0){
      newarray = numItem.itemBuy.toSpliced(value,1)
      objPrice = numItem.itemBuy.at(0).price
    }else{
      newarray = numItem.itemBuy.toSpliced(value,value)
      objPrice = numItem.itemBuy.at(value).price
    }
    if (parseFloat(numItem['price']-objPrice).toFixed(2)==0.00){
      plusItem({itemBuy:newarray,itemLiked:[...numItem['itemLiked']],price:'0'})
    }else{
      plusItem({itemBuy:newarray,itemLiked:[...numItem['itemLiked']],price:parseFloat(numItem['price']-objPrice).toFixed(2)})
    }
  }
  function LikeItem(obj){
    plusItem({itemBuy:[...numItem['itemBuy']],itemLiked:[...numItem['itemLiked'],obj],price:numItem['price']})
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

  // function changeTheme(page){
  //   if (theme=='Display' && page!='shop'){
  //     setTheme('NoDisplay')
  //   }else if(theme=='NoDisplay' && page=='shop')
  //   {
  //     setTheme('Display')
  //   }
  // }
  
  return (
    <>
    <div className='Route'>
        <Outlet context={{numItem:numItem,AddItem:AddItem,LikeItem:LikeItem,DeleteItem:DeleteItem,DeleteLikedItem:DeleteLikedItem}}/>
    </div>
    <NavBar/>
    <div className={theme}>
    <div className='Content'>
      <h1>Shop</h1>
      <Link to="HomePage" className='Link'>See Products</Link>
    </div>
    <div className='Overlay'></div>
    <video src={Video} autoPlay loop muted/>
    </div>
    

    </>
  )
}

export default ShopPage
