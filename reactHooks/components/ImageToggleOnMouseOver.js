import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg }) => {
    const myRef = useRef(null);
    return (
       
        <img src={primaryImg} alt="" ref={myRef} onMouseOver={() => {myRef.current.src = secondaryImg}} onMouseOut={() => {myRef.current.src = primaryImg}}/>
       
    );
};

export default ImageToggleOnMouseOver;