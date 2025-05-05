import React from "react";
import styled from "styled-components";
import { FavCharactersImg, UploadedImageBgImg } from "../assets";
import { useImageUpload } from "../utils/ImageUploadContext";

export const FavGrid = ({ title, isFav }) => {
  const { images } = useImageUpload();
  const imagesToView = images.map((image) => {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    } else {
      return image;
    }
  });
  return (
    <div
      style={{
        gap: isFav ? "21px" : "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {isFav && (
        <img
          src={FavCharactersImg}
          style={{ height: "457px", width: "482px", marginRight: "-6px" }}
        />
      )}
      {!isFav && (
        <Container>
          <div className="image1">
            {imagesToView[0] && (
              <img
                src={imagesToView[0]}
                style={{ backgroundImage: `url(${UploadedImageBgImg})` }}
              />
            )}
          </div>
          <div className="image2">
            {imagesToView[1] && (
              <img
                src={imagesToView[1]}
                style={{ backgroundImage: `url(${UploadedImageBgImg})` }}
              />
            )}
          </div>

          <div className="image3">
            {imagesToView[2] && (
              <img
                src={imagesToView[2]}
                style={{ backgroundImage: `url(${UploadedImageBgImg})` }}
              />
            )}
          </div>
          <div className="image4">
            {imagesToView[3] && (
              <img
                src={imagesToView[3]}
                style={{ backgroundImage: `url(${UploadedImageBgImg})` }}
              />
            )}
          </div>
        </Container>
      )}
      <p style={{ fontSize: "24px" }}>{title}</p>
    </div>
  );
};

const Container = styled.div`
  width: 482px;
  height: 449px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-radius: 20px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  );
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(66, 28, 73, 0.2);
  img {
    padding: 10px;
  }
  .image1 {
    border-radius: 20px 0px 0px 0px;
    border-right: 2px solid #9f9dcc;
    border-bottom: 2px solid #9f9dcc;
    width: 240px;
    height: 224px;
    img {
      border-radius: 20px 0px 0px 0px;
      width: 100%;
      height: 100%;
      object-fit: fit;
      border: 4px solid #553f78;
    }
  }
  .image2 {
    border-radius: 0px 20px 0px 0px;
    border-left: 2px solid #9f9dcc;
    border-bottom: 2px solid #9f9dcc;
    width: 240px;
    height: 224px;
    img {
      border-radius: 0px 20px 0px 0px;
      width: 100%;
      height: 100%;
      object-fit: fit;
      border: 4px solid #553f78;
    }
  }
  .image3 {
    border-radius: 0px 0px 0px 20px;
    border-right: 2px solid #9f9dcc;
    border-top: 2px solid #9f9dcc;
    width: 240px;
    height: 224px;
    img {
      border-radius: 0px 0px 0px 20px;
      width: 100%;
      height: 100%;
      object-fit: fit;
      border: 4px solid #553f78;
    }
  }
  .image4 {
    border-radius: 0px 0px 20px 0px;
    border-left: 2px solid #9f9dcc;
    border-top: 2px solid #9f9dcc;
    width: 240px;
    height: 224px;
    img {
      border-radius: 0px 0px 20px 0px;
      width: 100%;
      height: 100%;
      object-fit: fit;
      border: 4px solid #553f78;
    }
  }
`;
