
import RestroCard from "./RestroCard";
import { resList } from "../utilis/mockData";
import { useState,useEffect } from "react";
const Main =()=>{
   
   const[listOfRestaurants,setListOfRestaurants] =  useState(resList);
   const [searchText , setsearchText] = useState("");

   const handleSearch = (searchText)=>{
      if(searchText){
        const SearchedRestros= resList.filter(
           (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setListOfRestaurants(SearchedRestros);
      }
      else{
        setListOfRestaurants(resList);
      }
   }
    return (
        <div className='main'>

          <div className='Search'>
            <input type='text' value={searchText} className='input' placeholder='Search For Your  fav Restra.. '
              
              onChange={(e)=>{
                 const text = e.target.value;
                 setsearchText(text);
                 handleSearch(text);
              }}
            
            />
           
          </div>
          <div className="filter">
            <button className="filter-btn"
              onClick={()=>{
                const topRestros = resList.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setListOfRestaurants(topRestros);
                console.log(topRestros);
                console.log(listOfRestaurants);
              }}
              >
              Top Rated Restaurants

            </button>
          </div>
        <div className='cards'> 
        
        { listOfRestaurants.map( (restaurant) => (
            <RestroCard key ={restaurant.info.id} resData ={restaurant}/>
        )

        )}
      
        </div>
       

        </div>
    )
}

export default Main;