import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Upload } from "antd";
import { UploadIconImg } from "../assets";
const { Dragger } = Upload;

export const ImageUploader = ({
  setFinalImage,
  uploadedImage,
  setUploadedImage,
}) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleFileChange = (info) => {
    const { fileList } = info;
    if (fileList.length === 0) {
      setUploadedImage(null);
      setImagePreviewUrl("");
      return;
    }
    const file = fileList[0].originFileObj;
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  useEffect(() => {
    setFinalImage(uploadedImage);
  }, [uploadedImage]);

  return (
    <Container>
      <FullWidthDragger
        accept="image/*"
        maxCount={1}
        onChange={handleFileChange}
        beforeUpload={() => false}
        showUploadList={false}
        style={{
          border: "none",
          background: "none",
          padding: 0,
        }}
      >
        <UploadBg>
          <img src={UploadIconImg} alt="upload" />
        </UploadBg>
      </FullWidthDragger>
      {uploadedImage && (
        <ImagePreview>
          <img src={imagePreviewUrl} alt="Uploaded" />
        </ImagePreview>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const ImagePreview = styled.div`
  padding-inline: 1rem;
  img {
    max-width: 210px;
    max-height: 118px;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  margin-bottom: 30px;
  margin-top: -50px;
`;

const UploadBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
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

const FullWidthDragger = styled(Dragger)`
  padding: 0 !important;
  width: 100% !important;
  border: none !important;
  background: none !important;
`;
