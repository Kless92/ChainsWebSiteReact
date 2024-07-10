import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="App">
        {backToTopButton && (
            <button className='fa fa-arrow-up fa-lg'
            style={{
                position: "fixed", 
                bottom: "10px", 
                right: "100px", 
                height: "75px", 
                width: "75px", 
                fontSize: "75px"
            }} onClick={scrollUp}/>
        )}
    </div>;
    
}
export default BackToTopButton