import NavBar from './NavBar'
import './HomePage.css'
import { useEffect, useState } from 'react'

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
        if (!data){
            return(
                <p>Loading</p>
            )
        }
        return(
            <div className="Items">
                <img src={data['image']} alt=""  width={100}/>
                <div className='Description'>
                    <p>{data['title']}</p>
                    <p>{data['price']}</p>
                </div>
                <button className="Add" />
            </div>
        )
    }
    
    function EveryItems(data){
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
        </div>
    )
}

export default HomePage