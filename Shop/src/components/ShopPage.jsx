import { Link } from 'react-router-dom'
import  Video  from '../assets/BgdVideo.mp4'
import './ShopPage.css'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useState, createContext } from 'react'

export const MyContext = createContext();

function ShopPage() {
  const [theme, setTheme] = useState('Display')
  const [numItem, plusItem] = useState({itemBuy:[],itemLiked:[], price:0})
  
  function AddItem(obj,price){
    plusItem({itemBuy:[...numItem['itemBuy'],obj],itemLiked:[...numItem['itemLiked']],price:parseInt(numItem['price']+price)})
  }

  function changeTheme(page){
    if (theme=='Display' && page!='shop'){
      setTheme('NoDisplay')
    }else if(theme=='NoDisplay' && page=='shop')
    {
      setTheme('Display')
    }
  }

  return (
    <>
    <div className='Route'>
        <Outlet context={{numItem:numItem,AddItem:AddItem}}/>
    </div>
    <NavBar theme={changeTheme}/>
    <div className={theme}>
    <div className='Content'>
      <h1>Shop</h1>
      <Link to="HomePage" className='Link' onClick={changeTheme}>See Products</Link>
    </div>
    <div className='Overlay'></div>
    <video src={Video} autoPlay loop muted/>
    </div>
    

    </>
  )
}

export default ShopPage
