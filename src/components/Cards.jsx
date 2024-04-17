// Assets

import React, { useState } from 'react';
import './Cards.css'

const CardComponent = ({ menuName, image }) => {

    const [selectedImage, setSelectedImage] = useState(null)
    
    const handleCardClick = (image) => {
        setSelectedImage(image)
    }

    const handleCloseClick = () => {
        setSelectedImage(null)
    }
    
    return (
        <div className='image-gallery'>
            {selectedImage && (
                <div className="overlay" onClick={handleCloseClick}>
                    <div className="zoomed">
                        <span className="close" onClick={handleCloseClick}>&times;</span>
                        <img src={selectedImage} alt={menuName} />
                    </div>
                </div>
            )}
            <div className="images">
                <div className='card' onClick={() => handleCardClick(image)}>
                    <img src={image} alt={menuName} />
                </div>
            </div>
        </div>
    );
};

export default CardComponent;


