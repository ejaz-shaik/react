import { FOOD_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

// this component is food item content
const RestaurantMenuCategoryItem = (props) => {
    const { name, defaultPrice, price, finalPrice, imageId, description } = props?.itemData?.card?.info;
    const rating = props?.itemData?.card?.info?.ratings?.aggregatedRating?.rating;
    const ratingCount  = props?.itemData?.card?.info?.ratings?.aggregatedRating?.ratingCountV2;

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="border-gray-300 border-b-1">
            <div className="flex justify-between my-6">
                <div className="max-w-[60%]">
                    <h3 className="font-bold text-xl text-gray-700">{name}</h3>
                    <h4 className="font-bold pb-2">₹{(finalPrice) ? (finalPrice/100) : (defaultPrice/100) || (price/100)}</h4>
                    <h5 className="text-gray-500 pb-2">⭐<span className="text-green-800 font-bold">{rating}</span> ({ratingCount})</h5>
                    <p className="line-clamp-2">{description}</p>
                </div>
                <div>
                    <div className="absolute">
                        <button className="px-3 py-1 bg-black text-white mx-20 rounded-md" 
                            onClick={() => handleAddItem(props?.itemData?.card?.info)}>Add +</button>
                    </div>
                    <img className="w-60 h-45 rounded-lg" alt="card-logo" 
                        src={ FOOD_ITEM_URL + imageId} />
                </div>
            </div>
        </div>
        
    )
}

export default RestaurantMenuCategoryItem;
