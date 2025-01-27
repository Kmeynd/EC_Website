import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar (){
    return(
        <div className="NavBar">
           <div className='NavBarTitle'>
                <h2>Navigation</h2>
                <button>X</button>
           </div>
            <ul>
                <li><Link to="/" className='NavBarLink'>Front Page</Link></li>
                <li><Link to="HomePage" className='NavBarLink'>Home Page</Link></li>
                <li><Link className='NavBarLink'>Cart</Link></li>
            </ul>
        </div>
    )
}

export default NavBar