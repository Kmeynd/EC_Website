import './Header.css'
import heart from '../assets/heart.png'
import dollar from '../assets/dollar.png'
import { Link } from 'react-router-dom'

function Header(prop){

    return (
        <div className='Header'>
            <div className='SearchBar'>
                <input  type="text" placeholder='Shirt...'/>
            </div>
            <div className='SavedItems'>
                <div>
                    <p>{prop.item.itemLiked.length}</p>
                    <img src={heart} alt="<3" width={25} />
                </div>
                <Link to={"/CartPage"} className='LinkHeader'>
                    <p>{prop.item.price}</p>
                    <img src={dollar} alt="$" width={25} />
                </Link>
            </div>
        </div>
    )
}

export default Header