import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Gallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  return (
    <div>
      {/* Display images as thumbnails */}
      <div style={{ display: 'flex', padding:'3%'}}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '150px', cursor: 'pointer',width:'16%' }}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Display the lightbox when it's open */}
      {isOpen && (
        <Lightbox
          mainSrc={images[currentImage]}
          nextSrc={images[(currentImage + 1) % images.length]}
          prevSrc={images[(currentImage + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default Gallery;
