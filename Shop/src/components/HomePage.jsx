import './HomePage.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage (){
    const url = 'https://fakestoreapi.com/products'
    const [data, setData] = useState("")

    useEffect(()=>{
        fetch(`${url}`)
            .then(res=>res.json())
            .then(json=>{
                setData(json)
            })

    },[])
    
    

    function Item(data){
        
        return(
            <Link to="/ItemPage" className="Items" key={data['title']} state={data}>
                <img src={data['image']} alt=""  />
                <div className='Description'>
                    <p>{data['title']}</p>
                    <p>{data['price']}$</p>
                </div>
                <button className="Add" >Add to cart</button>
            </Link>
        )
    }
    
    function EveryItems(data){
        if (data==undefined){
            return(
                <p>Loading</p>
            )
        }
        let listItem = []
        for(let i of data){
            listItem.push(Item(i))
        }
        return listItem
    }

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
           <div className='DisplayItems'>
            {
                EveryItems(data)
            }
           </div>
           <div className='Footer'>
            <p>Info</p>
           </div>
        </div>
    )
}

export default HomePage