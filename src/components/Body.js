import Restaurantcard from "./Restaurantcard";
import resObj from "../Utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.717556&lng=75.907826&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log("apex", json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };
    useEffect(() => {
        fetchdata();
    }, []);


    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">

            <div className="filters">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredrestaurants = listOfRestaurants.filter((res)=>
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurants(filteredrestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = resObj.filter((res) => res.avgRating > 4);
                        setListOfRestaurants(filteredList);
                        console.log("hii");
                    }
                }>
                    Top Rated Restaurants</button>

            </div>
            <div className="restcontainer">

                {filteredRestaurants.map((restaurant, index) => <Restaurantcard key={restaurant.info?.id} resData={restaurant.info} />)}
            </div>

        </div>
    )
}

export default Body;