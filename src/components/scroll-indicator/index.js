import { useEffect, useState } from "react"
import './scroll.css'

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }

        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {
        console.log('body.scrollTop', document.body.scrollTop);
        console.log('documentElement.scrollTop', document.documentElement.scrollTop); // how much we scrolled to top
        console.log('documentElement.scrollHeight', document.documentElement.scrollHeight); // total scroll height
        console.log('documentElement.clientHeight', document.documentElement.clientHeight); // total visible height without scrolling

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage)
        }
    }, [])
    console.log(scrollPercentage);

    if(errorMessage) {
        return <div>Error Occured....</div>
    }

    if(loading) {
        return <div>Loading Data....</div>
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <h3>Scroll Indicator</h3>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}