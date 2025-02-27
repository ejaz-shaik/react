import { useEffect, useState } from "react";
import MemesItemCard from "./MemesItemCard";
import ShimmerUiMemes from "./ShimmerUiMemes";

const MemesPage = () => {
    const [memes, setMemes] = useState(null);

    useEffect(() => {
        fetchMemes();
    }, []);

    const fetchMemes = async () => {
        const data = await fetch("https://meme-api.com/gimme/30");
        const json = await data.json();
        setMemes(json.memes);
    }

    return (
        <div className="mx-22 my-6">
            <div className="flex flex-wrap">
                {(!memes) ? <ShimmerUiMemes /> : 
                memes.map((item,index) => <MemesItemCard key={index} data={item} /> )}
            </div>
        </div>
    );
}

export default MemesPage;
