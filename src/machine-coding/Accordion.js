import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const data = [
        {
            title: "Accordion 1",
            body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            title: "Accordion 2",
            body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            title: "Accordion 3",
            body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
    ];

    return (
        <div className="w-[50%] mx-auto mt-5">
            {data.map((item, index) =>
                 <AccordionItem 
                 key={index} 
                 title={item.title}
                 body={item.body}
                 isOpen={openIndex === index}
                 toggleItem={() => openIndex === index ? setOpenIndex(null) : setOpenIndex(index)}
                 />
            )}
        </div>
    )
}

export default Accordion;
