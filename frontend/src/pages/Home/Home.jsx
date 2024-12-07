import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreRestaurant from '../../components/ExploreRestaurant/ExploreRestaurant'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const[category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreRestaurant category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home
