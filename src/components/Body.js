
import RestaurantCard, {withFastDelivery} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useSwiggyApi from "../utils/useSwiggyApi";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Body = () => {

    // const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const restaurantsList = useSwiggyApi(); //this custom hook fetches swiggy api restaurants data
    const { user, setUserName } = useContext(UserContext);

    useEffect(() => {
        setFilteredRestaurant(restaurantsList);
    }, [restaurantsList]);


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
        return <h1>Oops, No internet connection. Please check and retry again</h1>
    const handleSearch = () => {
        const searchedRestaurant = restaurantsList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(searchedRestaurant);
    }

    const FastRestaurant = withFastDelivery(RestaurantCard);

    return (
        <div className="body">
            <div className="filter">
                <div className="flex">
                    <input type="text" className="border border-black h-8 p-2 mt-4 rounded-md" 
                        value={searchText} placeholder="Type to search" onChange={(e) => setSearchText(e.target.value)} />
                    <button className="text-xs border-solid border-black rounded-lg bg-gray-100 max-h-fit p-2 mt-4 ml-4" onClick={handleSearch}>Search</button>
                </div>
                <button 
                className="text-xs border-solid border-black rounded-lg bg-gray-100 max-h-fit p-2 mt-4 ml-4"
                onClick={() => {let filteredList = restaurantsList.filter((res) => res.info.avgRating > 4);
                    setRestaurantsList(filteredList);
                }}
                >
                    Top Rated
                </button>
                <div className="flex">
                    <input type="text" className="border border-black h-8 p-2 mt-4 ml-4 rounded-md" 
                        placeholder="User name" value={user} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="card-container">
                {
                    filteredRestaurant.map((eachRestaurant) => 
                    <Link to={"/restaurants/" + eachRestaurant.info.id} className="card-click" key={eachRestaurant.info.id}>
                        {eachRestaurant.info.sla.deliveryTime <= 30 ? (
                            <FastRestaurant restaurantData={eachRestaurant} />
                        ) : (
                            <RestaurantCard key={eachRestaurant.info.id} restaurantData={eachRestaurant} />
                        )}
                    </Link>)
                }
            </div>
        </div>
    )
}

export default Body;
