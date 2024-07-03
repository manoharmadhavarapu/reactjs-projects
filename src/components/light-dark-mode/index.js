import { useEffect, useState } from "react";
import './styles.css'
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {

    // localstorage custom hook
    const [theme, setTheme] = useLocalStorage('theme','dark')

    
    // const [theme,setTheme] = useState(()=>{
    //     let currentValue;
    //     try {
    //         currentValue = JSON.parse(localStorage.getItem('theme') || String('dark'))
    //     } catch (error) {
    //         console.log(error);
    //         currentValue = 'dark'
    //     }

    //     return currentValue;
    // }) // 'dark'

    // useEffect(()=>{
    //     localStorage.setItem('theme',JSON.stringify(defaultTheme)); //"'dark'"
    // },[theme])


    function handleThemeToggle() {  
        setTheme(theme === 'light' ? 'dark' :'light' )
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World!</p>
                <button onClick={handleThemeToggle}>Change Theme</button>
            </div>
        </div>
    )
}