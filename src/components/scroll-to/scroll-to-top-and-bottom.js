import { useRef } from "react";
import useFetch from "./useFetch"


export default function ScrollToTopAndBottom() {

    // useFetch custom hook
    const { data, pending, error } = useFetch("https://dummyjson.com/products?limit=100", {});
    const bottomRef = useRef(null);

    function handleScrollToTop() {
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behavior:'smooth'})
    }

    if (error) {
        return <h1>Error occured ! Please try again.</h1>;
    }

    if (pending) {
        return <h1>Loading ! Please wait</h1>;
    }

    return (
        <div>
            <h1>Scroll To Top and Bottom</h1>
            <h3>This is top section of this component</h3>
            <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
            {/* <button onClick={handleScrollToBottom}>Scroll To Bottom</button> */}
            <ul style={{ listStyle: 'none' }}>
                {
                    data && data.products && data.products.length > 0 ?
                    data.products.map((dataItem)=>{
                        return(
                            <li key={dataItem.id}>{dataItem.title}</li>
                        )
                    })
                    : null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll To Top</button>
            <h3 ref={bottomRef}>This is bottom section of this component</h3>
        </div>
    )
}