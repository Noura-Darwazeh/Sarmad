import React, { useEffect, useState } from "react";
import { GlassDiv, MadeByUs } from "../components";
import { ArrowRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { FavIcon, ImageIcon, RatingIcon } from "../assets";
import { AllData } from "../utils/ViewData";
import { useLocation } from "react-router-dom";

export const ViewPage = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const [data, setData] = useState();
  useEffect(() => {
    const foundData = AllData[id];
    if (foundData) {
      setData(foundData);
    } else {
    }
  }, [id]);
  return (
    <div>
      <MadeByUs />
      <Back>
        <h1>العودة</h1>
        <ArrowRightOutlined
          style={{
            color: "white",
            fontSize: "24px",
          }}
        />
      </Back>
      <ElementContainer>
        <Details>
          <h1>{data?.title}</h1>
          <RatingContainer>
            <div>
              <h6>تقييم المستخدم:</h6>
              <img
                src={RatingIcon}
                alt="icon"
                style={{ width: "74px", height: "13px" }}
              />
            </div>
            <img
              src={ImageIcon}
              alt="icon"
              style={{ width: "39px", height: "36px" }}
            />
          </RatingContainer>
          <h6 style={{ fontSize: "36px" }}>{data?.details}</h6>
          <p>{data?.description}</p>
          <ButtonsContainer>
            <img src={FavIcon} style={{ width: "52px", height: "46px" }} />
            <button
              style={{ width: "148px", height: "51px" }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = data?.mainImage;
                const extension = data?.mainImage.split(".").pop();
                link.download = (data?.title || "image") + "." + extension;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              تنزيل
            </button>
          </ButtonsContainer>
        </Details>
        <GlassDiv
          width="765px"
          height="938px"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {data?.mainImage && (
            <img
              src={data?.mainImage}
              alt="main"
              style={{
                maxWidth: "741px",
                maxHeight: "893px",
              }}
            />
          )}
        </GlassDiv>
      </ElementContainer>
      <ImagesContainer>
        {data?.image[2] && <Image image={data?.image[2]?.src} />}
        {data?.image[1] && <Image image={data?.image[1]?.src} />}
        {data?.image[0] && <Image image={data?.image[0]?.src} />}
      </ImagesContainer>
    </div>
  );
};

const Back = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 50px 76px 0 55px;
  h1 {
    font-size: 36px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ElementContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 51px 91px 0 63px;
`;

const Details = styled.div`
  display: flex;
  height: 938px;
  flex-direction: column;
  align-items: flex-end;
  padding: 285px 67px 234px 0;
  h1 {
    font-size: 34px;
  }
  h6 {
    font-size: 22px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    width: 500px;
    margin-top: 25px;
    margin-bottom: 60px;
  }
`;

const RatingContainer = styled.div`
  gap: 13px;
  display: flex;
  margin-top: 22px;
  div {
    gap: 11px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 32px;
  }
`;

const ButtonsContainer = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 63px 91px 0 91px;
`;

const Image = styled.div`
  width: 395px;
  height: 420px;
  border-radius: 20px;
  background-image: url(${(Props) => Props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
