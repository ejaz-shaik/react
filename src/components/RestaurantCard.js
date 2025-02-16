import { IMG_URL } from "../utils/constants";

const RestaurantCard = ( props ) => {
    const { restaurantData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = restaurantData?.info;
    const { deliveryTime } = restaurantData?.info?.sla;
    return (
        <div className="w-70 bg-pink-50 rounded-lg m-3 pb-2.5">
            
                <img className="w-full h-45 rounded-lg" alt="card-logo" 
                    src={ IMG_URL + cloudinaryImageId} />
                <div className="px-2.5">
                    <h2 className="font-bold pt-2 line-clamp-1">{name}</h2>
                    <h5 className="line-clamp-1">{cuisines.join(", ")}</h5>
                    <h5>{avgRating}</h5>
                    <h5>{deliveryTime} MINS</h5>
                    <h5>{costForTwo}</h5>
                </div>
            
        </div>
    )
};

export const withFastDelivery = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute text-xs bg-black text-white p-1 m-1">Fast Delivery</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;

