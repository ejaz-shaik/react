import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useMenuData from "../utils/useMenuData";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

// This component displays all categories of clicked restaurant
const RestaurantMenu = () => {
    
    const [itemIndex, setItemIndex] = useState(0);

    const toggleCategory = (index) => {
        setItemIndex((prevIndex) => prevIndex === index ? null : index);
    }
    
    const { resId } = useParams();

    const menuData = useMenuData(resId);
    
    if(menuData === null) return <Shimmer />;

    const info = menuData?.cards[2]?.card?.card?.info;

    const groupedCategories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div className="max-w-[50%] mx-auto my-10">
            <h1 className="font-bold text-2xl mb-4">{info.name}</h1>
            <div className="menu-top-info">
                <div className="card-item-content">
                    <h4>{info.avgRatingString} ({info.totalRatingsString})</h4>
                    <h4>{info.costForTwoMessage}</h4>
                    <h4>{info.cuisines.join(",")}</h4>
                </div>
            </div>
            <div>
            {/* Below child Category components are controlled by this parent component 
            by lifting the state up using showItems, setItemIndex  */}
            {groupedCategories.map((c, index) => 
                <RestaurantMenuCategory 
                    data={c?.card?.card} 
                    key={c?.card?.card?.title}
                    showItems={itemIndex === index ? true : false}
                    setItemIndex={() => toggleCategory(index)} 
                    // setItemIndex={() => setItemIndex(index)}
                />
            )}
            </div>
        </div>
    )
}

export default RestaurantMenu;
