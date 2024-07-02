import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({url,limit=5,page=1}) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide-1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide+1)
    }

    useEffect(()=>{
        if(url !== '') fetchImages(url)
    },[url])

    if(loading) {
        return (
            <div>Loading Data! Please Wait</div>
        )
    }

    if(error !== null) {
        return (
            <div>Error Occured! {error}</div>
        )
    } 

    return (
        <>
            <h3>Image Slider</h3>
            <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length>0 ?
                images.map((imageItem,index)=>{
                    return (
                        <img 
                            key={imageItem.id} 
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    )
                }) 
                : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length>0 ? images.map((_,index)=>{
                        return (
                            <button
                                key={index}
                                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-current-indicator"}
                                onClick={()=>setCurrentSlide(index)}
                            ></button>
                        )
                    }) : null
                }
            </span>
        </div>
        </>
    )
}