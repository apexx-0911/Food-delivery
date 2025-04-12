import { CDN_URL } from "../Utils/constants.js";

const Restaurantcard = (props) => {
    const { resData ={} } = props;
    const {cloudinaryImageId,name , cuisines ,avgRating, costForTwo } = resData;
    console.log(resData);
    // console.log(resData?.name, "resData");
    return (
        <div className="rest-card">
            <img src={CDN_URL + cloudinaryImageId} className="res-logo"></img>
            <h3 className="res-Name">
                {name}
            </h3>
            <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : "Cuisines not available"}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default Restaurantcard;