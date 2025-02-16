import { useState, useEffect } from "react";
import { MENU_CARD_URL } from "./constants";

const useMenuData = (resId) => {
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(MENU_CARD_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setMenuData(json.data);
    }

    return menuData;
}

export default useMenuData;
