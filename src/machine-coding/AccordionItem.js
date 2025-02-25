
const AccordionItem = ({ title, body, isOpen, toggleItem }) => {

    return (
        <div className="shadow mb-2 border border-gray-100">
            <div className="flex justify-between bg-gray-100 p-2" onClick={toggleItem}>
                <span>{title}</span>
                <span>🔽</span>
            </div>
            {isOpen &&
            <div className="p-2">{body}</div>}
        </div>
    )
}

export default AccordionItem;
