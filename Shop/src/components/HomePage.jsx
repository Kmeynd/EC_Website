import './HomePage.css'
import {  useEffect, useState } from 'react'
import { Link,useOutletContext } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import img3 from "../assets/images/3img.jpg"


function HomePage (){
    const url = 'https://fakestoreapi.com/products'
    const [data, setData] = useState("Loading")

    const item = useOutletContext();

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
            </Link>
        )
    }
    
    function EveryItems(data){
        let listItem = []
        for(let i of data){
            listItem.push(Item(i))
        }
        return listItem
    }
    
    if (data=='Loading'){
        return(
            <>
            <Header item={item.numItem}/> 
            <div className='LoaderParent'>
                <div className='Loader'/>
            </div>
            </>
           
        )
    }

    return(
        <div>
            <Header item={item.numItem}/>
            <div className='Carousel'>
                <img src={img3} alt="Image" className='Appears'/>
                    <div>
                        <h2>"Everything You Need, All in One Place"</h2>
                        <p>Welcome to Shop, the ultimate shopping destination for everything you need. From the latest tech to everyday essentials, we bring you top-quality products, unbeatable deals, and fast, reliable shipping. Shop with confidence and discover why millions trust us for the best in convenience and choice!</p>
                    </div>
                    
            </div> 
           <div className='DisplayItems'>
            {
                EveryItems(data)
            }
           </div>
           <Footer/>
        </div>
    )
}

export default HomePage