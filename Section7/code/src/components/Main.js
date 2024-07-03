import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { API_LINK } from "../utilis/constants";

const Main = () => {
  const [resList, setRestros] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    try {
      const response = await fetch(API_LINK);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json?.data);

      setRestros(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);

      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleSearch = (searchText) => {
    if (searchText) {
      const searchedRestros = resList.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestaurants(searchedRestros);
    } else {
      setListOfRestaurants(resList);
    }
  };
  
  return(listOfRestaurants.length==0)?
  <Shimmer/>:(
    <div className="main">
      <div className="Search">
        <input
          type="text"
          value={searchText}
          className="input"
          placeholder="Search For Your fav Restra.. "
          onChange={(e) => {
            const text = e.target.value;
            setSearchText(text);
            handleSearch(text);
          }}
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
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
      <div className="cards">
        {listOfRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Main;
