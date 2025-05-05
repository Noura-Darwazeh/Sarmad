import React, { useState } from "react";
import { ImageUploader, MadeByUs } from "../components";
import styled from "styled-components";
import { useImageUpload } from "../utils/ImageUploadContext";

export const UploadPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const { addImage } = useImageUpload();
  const handleImageUpload = () => {
    if (uploadedImage) {
      addImage(uploadedImage);
      setUploadedImage(null);
      alert("تم تحميل الصورة بنجاح!");
    }
  };
  return (
    <Container>
      <MadeByUs />
      <UploadingContainer>
        <h1>قم بتحميل الأصل الخاص بك</h1>
        <ImageUploader
          setFinalImage={setUploadedImage}
          setUploadedImage={setUploadedImage}
          uploadedImage={uploadedImage}
        />
        <button onClick={handleImageUpload}>تحميل</button>
        <h1>اترك تعليق:</h1>
        <UploadBg width="442px" height="208px"></UploadBg>
        <button>الموافقة</button>
      </UploadingContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UploadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 63px 180px 20px 180px;
  h1 {
    font-size: 34px;
    margin-bottom: 21px;
  }
  button {
    width: 148px;
    height: 51px;
    font-size: 16px;
    margin-bottom: 60px;
  }
`;

const UploadBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 20px;
  margin-bottom: 60px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.5);
  img {
    width: 113px;
    height: 113px;
  }
`;
