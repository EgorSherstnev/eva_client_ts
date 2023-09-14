import React, {useState} from "react";
import IconR from "../images/Accordion/icon-right.png";
import IconD from "../images/Accordion/icon-down.png";

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
            <div className="accordion max-w-2xl my-8 mx-auto">
                <div className="accordion-item">
                    <div 
                        className="accordion-title text-gray-200 flex items-center text-2xl cursor-pointer font-medium hover:text-indigo-500"
                        onClick={() => setIsActive(!isActive)}
                    >
                        {isActive ? <img className="pr-2" src={IconD}/> : <img className="pr-2" src={IconR} />} 
                        <div>{title}</div>
                    
                    </div>
                    {isActive && <div className="accordion-content text-gray-400 flex items-strech px-6 text-xl pb-6">{content}</div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Accordion;



/*
const Accordion = ({items}) => {
    const [activeIndex,setActiveIndex] = useState(null);


    const onTitleClick = (index) => {
       setActiveIndex(index);  
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active} text-gray-200 flex items-center text-2xl font-medium hover:text-indigo-500`} onClick={ () => onTitleClick(index)}>
                    <i className="pr-2">
                       <img src={IconD} />
                    </i>
                    {item.title}
                </div>
                <div className={`content ${active} text-gray-400 flex items-strech px-6 text-xl pb-6`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );

    });


    return <div className>{renderedItems}</div>    
};

export default Accordion;
*/

