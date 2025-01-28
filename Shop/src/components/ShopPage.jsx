import { Link } from 'react-router-dom'
import  Video  from '../assets/BgdVideo.mp4'
import './ShopPage.css'
import NavBar from './NavBar'

function ShopPage() {
  return (
    <>
    <div className='Content'>
      <h1>Shop</h1>
      <Link to="HomePage" className='Link'>See Products</Link>
    </div>
    <div className='Overlay'></div>
    <video src={Video} autoPlay loop muted/>
    </>
  )
}

export default ShopPage
