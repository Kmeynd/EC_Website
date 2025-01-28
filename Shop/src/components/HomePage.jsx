import NavBar from './NavBar'
import './HomePage.css'

function HomePage (){
    return(
        <div>
            <div className='Header'>
                <div className='SearchBar'>
                    <input  type="text" placeholder='Shirt...'/>
                </div>
                <div className='SavedItems'>
                    <img src="" alt="<3" />
                    <img src="" alt="$" />
                </div>
            </div>
        </div>
    )
}

export default HomePage