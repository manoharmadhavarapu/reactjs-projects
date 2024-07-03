import { useState } from "react";
import MenuList from "./menu-list";


export default function MenuItem({ item }) {

    {/* 1st Method */}
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    {/* 2nd Method */}
    // const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

    {/* 1st Method */}
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel],
        })
    }

    return (
        <li className="menu-item">
            <div style={{display:'flex', alignItems:'center', gap:'10px', fontSize:'18px'}}>

                <p>{item.label}</p>

                {/* 1st Method */}
                {item && item.children && item.children.length && <span style={{cursor:'pointer'}} onClick={()=>handleToggleChildren(item.label)}>{displayCurrentChildren[item.label]?"-":"+"}</span>}

                {/* 2nd Method */}
                {/* {item && item.children && item.children.length && <span style={{cursor:'pointer'}} onClick={()=>setDisplayCurrentChildren(!displayCurrentChildren)}>{displayCurrentChildren ? '-':'+'}</span>} */}

            </div>

            {/* 1st Method */}
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }

            {/* 2nd Method */}
            {/* {
                item && item.children && item.children.length > 0 && displayCurrentChildren ?
                    <MenuList list={item.children} />
                    : null
            } */}

        </li>
    )
}