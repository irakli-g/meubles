import React, { useState } from "react";

export const ProductImamges = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="singleProductImages">
      <img src={mainImage.url} alt={mainImage.filename} />
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <img
              className={item.id === mainImage.id ? "active" : null}
              src={item.url}
              key={index}
              alt={item.filename}
              onClick={() => {
                setMainImage(images[index]);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
