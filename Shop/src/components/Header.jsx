import './Header.css'

function Header(prop){

    return (
        <div className='Header'>
            <div className='SearchBar'>
                <input  type="text" placeholder='Shirt...'/>
            </div>
            <div className='SavedItems'>
                <div>
                    <p></p>
                    <img src="" alt="<3" />
                </div>
                <div>
                    <p>{prop.item.price}</p>
                    <img src="" alt="$" />
                </div>
            </div>
        </div>
    )
}

export default Header