import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchMenu();

    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.717556&lng=75.907826&restaurantId=728301&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setresInfo(json.data);
    }

    const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    console.log(itemCards);
    // console.log(ite);

    return resInfo === null ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3> {costForTwoMessage} </h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item, key) =>
                    <li>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )}
               
            </ul>
        </div>
    )
}
export default RestaurantMenu;