import { useEffect, useState } from "react";
import MemesItemCard from "./MemesItemCard";
import ShimmerUiMemes from "./ShimmerUiMemes";

const MemesPage = () => {
    const [memes, setMemes] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);

    useEffect(() => {
        fetchMemes();
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll); //always remove event listeners
    }, []);

    const handleScroll = () => {
        if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
            fetchMemes();    // once reached the bottom of page, make an API call
        }
    }

    const fetchMemes = async () => {
        setShowShimmer(true);
        const data = await fetch("https://meme-api.com/gimme/20");
        const json = await data.json();
        setShowShimmer(false);
        setMemes((memes) => [...memes, ...json.memes]);
    }

    return (
        <div className="mx-22 my-6">
            <div className="flex flex-wrap">
                {memes.map((item,index) => <MemesItemCard key={index} data={item} /> )}
                {showShimmer && <ShimmerUiMemes />}
            </div>
        </div>
    );
}

export default MemesPage;
