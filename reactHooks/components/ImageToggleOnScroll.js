import React, {useRef, useEffect, useState} from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg }) => {
    const myRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView (isInView());
        setIsLoading(false);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        }); 
    }, [isLoading])
    
    const [inView, setInView] = useState(false);
    
    const isInView = () => {
        if (myRef.current) {
            const rect = myRef.current.getBoundingClientRect();
            return rect.top >=0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }
    
    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        });
    };
    
    return isLoading ? null : (
       
        <img src={inView ? secondaryImg : primaryImg} alt="" ref={myRef} />
       
    );
};

export default ImageToggleOnScroll;