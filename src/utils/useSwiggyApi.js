import { SWIGGY_API } from "./constants";
import { useState, useEffect } from "react";

const useSwiggyApi = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(SWIGGY_API);
            const json = await data.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantsList(restaurants);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
    return restaurantsList;
}

export default useSwiggyApi;
