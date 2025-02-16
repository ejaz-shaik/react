import RestaurantMenuCategoryItem from "./RestaurantMenuCategoryItem";

const RestaurantMenuCategory = ({data, showItems, setItemIndex}) => {

    const handleClick = () => {
        setItemIndex();
    }

    return (
        <div className="bg-gray-50 shadow-xl rounded-lg p-4 my-2">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
        
        {showItems && <div>
            {data.itemCards.map((item) => 
            <RestaurantMenuCategoryItem itemData={item} key={item?.card?.info?.id} />
            )}
        </div>}
        </div>
    )
}

export default RestaurantMenuCategory;
