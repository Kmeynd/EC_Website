import { Link } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react'
import home from '../assets/home.png'
import shoppingCart from '../assets/shopping-cart.png'
import welcome from '../assets/welcome-back.png'

function NavBar (){
    const [state, setstate] = useState(0)

    function ReduceNavBar(){
        function ChangeStateIncrease(){
            setstate(0)
        }
        return(
            <div className="ReducedNavBar">
               <div className='NavBarTitle'>
                    <h3>Shop</h3>
                    <button onClick={ChangeStateIncrease}>{'>'}</button>
               </div>
                <ul className='UlNavBar'>
                    <li><Link to="/" className='NavBarLink'><img src={welcome} alt="Front Page" /></Link></li>
                    <li><Link to="/HomePage" className='NavBarLink'><img src={home} alt="Home" /></Link></li>
                    <li><Link to="/CartPage" className='NavBarLink'><img src={shoppingCart} alt="Cart" /></Link></li>
                </ul>
            </div>
        )

    }
    function IncreaseNavBar(){
        function ChangeStateReduce(){
            setstate(1)
        }
        return(
            <div className="NavBar">
               <div className='NavBarTitle'>
                    <h2>Shop</h2>
                    <button onClick={ChangeStateReduce}>{'<'}</button>
               </div>
                <ul className='UlNavBar'>
                    <li><Link to="/" className='NavBarLink'>Front Page</Link></li>
                    <li><Link to="/HomePage" className='NavBarLink'>Home Page</Link></li>
                    <li><Link  to="/CartPage" className='NavBarLink'>Cart</Link></li>
                </ul>
            </div>
        )

    }
    let x = state
    if (x == 1){
        return ReduceNavBar()
    }else{
        return IncreaseNavBar()
    }
    // if (props.NavBarSize == 1){
    //     return ReduceNavBar()
    // }else{
    //     return IncreaseNavBar()
    // }
    
}

export default NavBar