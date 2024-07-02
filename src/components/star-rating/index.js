
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log('click',getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log('move',getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        console.log('leave',rating);
        setHover(rating)
    }

    return (
        <div className="star-rating">
            <h3>Star Rating</h3>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1;
                    return (
                        <FaStar 
                            key={index} 
                            className={index <= (hover || rating) ? "active" : "inactive"}
                            onClick={()=>handleClick(index)}
                            onMouseMove={()=>handleMouseEnter(index)}
                            onMouseLeave={()=>handleMouseLeave()}
                            size={30}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarRating;