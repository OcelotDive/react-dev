import React from 'react';
import ImageToggleOnScroll from '../components/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return (
         <div>
        {[1124, 187, 1269, 1530].map(speakerId => {
        
      
        return (
            <div key={speakerId}>
                <ImageToggleOnScroll
                        primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                        secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                            alt="" />
            </div>
        )
       })}
        </div>
    
    );
};

export default ImageChangeOnScroll;