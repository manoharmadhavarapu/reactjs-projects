import { useState } from "react";
import './tabs.css'


export default function Tabs({tabsContent, onChange}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentIndex(getCurrentIndex);
        onChange(getCurrentIndex)
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem,index)=>{
                        return(
                            <div className={`tab-item ${currentIndex === index ? 'active' : ''}`} key={tabItem.label} onClick={()=>handleOnClick(index)}>
                                <span className="label">{tabItem.label}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="content">
                {
                    tabsContent[currentIndex] && tabsContent[currentIndex].content
                }
            </div>
        </div>
    )
}