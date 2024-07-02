import { useEffect, useState } from "react";
import './styles.css';

export default function LoadMoreData() {
    
    const [loading,setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProductsData() {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            console.log(data);
            if(data && data.products && data.products.length) {
                setProducts([...products, ...data.products]);
                // setProducts((prevData) => [...prevData, ...data.products] )
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProductsData()
    },[count])

    useEffect(()=>{
        if(products && products.length === 100) {
            setDisableButton(true);
        }
    },[products])

    if(loading) {
        return <h1>Loading data! Please Wait</h1>
    }

    return (
        <div className="load-more-container">
            <h2>Load More Data</h2>
            <div className="product-container">
                {
                    products && products.length ? 
                    products.map((item)=>{
                        return (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title}/>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                    : null

                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count+1)}> Load More Data </button>
                {
                    disableButton ? <p>You have reached to 100 products</p> : null
                }
            </div>
        </div>
    )
}