import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCategoryItem from "./RestaurantMenuCategoryItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="mx-50 p-10"> 
            <h1 className="text-center font-bold text-2xl">
                {cartItems.length === 0 ? "Your cart is empty, please add items!" : "Your Order Items"}</h1>
            <div className="my-4">
                {cartItems.map((item) => ( 
                    <RestaurantMenuCategoryItem itemData={{ card: { info: item } }} key={item?.card?.info?.id || item?.id} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-300 font-semibold p-2 mx-4 rounded-md cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
                <button className="bg-orange-400 font-semibold p-2 mx-4 rounded-md cursor-pointer">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;
