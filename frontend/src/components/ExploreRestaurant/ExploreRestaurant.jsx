import React from 'react'
import './ExploreRestaurant.css'
import { restaurant_list } from '../../assets/assets'

const ExploreRestaurant = ({category,setCategory}) => {
  return (
    <div className='explore-restaurant' id='explore-restaurant'>
        <h1>Explore our Restaurants</h1>
        <p className='explore-restaurant-text'>Choose from a diverse menu featuring a delectable array of restaurants.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <div className="explore-restaurant-list">
            {restaurant_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.restaurant_name?"All":item.restaurant_name)} key={index} className="explore-restaurant-list-item">
                        <img className={category===item.restaurant_name?"active":""} src={item.restaurant_image} alt=""/>
                        <p>{item.restaurant_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreRestaurant
