import { useEffect, useRef, useState } from "react"
import useOutsideClick from ".";


export default function UseOutsideClickHookTest() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();

    // click outside custom hook
    useOutsideClick(ref,()=>setShowContent(false));

    return (
        <div style={{backgroundColor:'greenyellow', width:'80%', margin:'auto', padding:'40px'}}>
            {
                showContent ? (
                    <div ref={ref} style={{backgroundColor:'black', color:'white',width:'100%', margin:'0px auto'}}>
                        <h1>This is a random content</h1>
                        <p>
                            Please click outside of this content to close hide/close content. It won't close if you click inside of this content
                        </p>
                    </div>
                ) :
                <button onClick={()=>setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}