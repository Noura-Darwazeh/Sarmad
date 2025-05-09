import React from "react";
import styled from "styled-components";
import frame from "../../assets/Card/frame.png";
export const StylestaCard = ({ image, name, imageToDownload }) => {
  return (
    <CardWrapper
      onClick={() => {
        if (!imageToDownload) return;
        const link = document.createElement("a");
        link.href = imageToDownload;
        const extension = imageToDownload.split(".").pop();
        link.download = (name || "image") + "." + extension;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      {image && <img src={image} />}
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  width: 256px;
  height: 304px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  padding: 24px 41px 5px 32px;
  background-image: url(${frame});
  img {
    width: 184px;
    height: 208px;
    border: none;
    object-fit: contain;
  }
`;
