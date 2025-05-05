import React, { createContext, useContext, useState } from "react";

const ImageUploadContext = createContext();

export const ImageUploadProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const addImage = (file) => {
    if (images.length >= 4) {
      setImages((prev) => prev.slice(1));
    }
    setImages((prev) => [...prev, file]);
  };

  return (
    <ImageUploadContext.Provider value={{ images, addImage }}>
      {children}
    </ImageUploadContext.Provider>
  );
};

export const useImageUpload = () => useContext(ImageUploadContext);
