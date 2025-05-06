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
          className="glass"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {data?.mainImage && <MainImg src={data?.mainImage} alt="main" />}
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
  @media (max-width: 1400px) {
    padding: 40px 55px 0 55px;
    .glass {
      width: 650px;
      height: 800px;
    }
  }
  @media (max-width: 1200px) {
    padding: 20px 20px 0 20px;
    .glass {
      width: 500px;
      height: 600px;
    }
  }
  @media (max-width: 950px) {
    padding: 20px 10px 0 10px;
    .glass {
      width: 400px;
      height: 500px;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    direction: column-reverse;
    .glass {
      width: 90%;
      height: 600px;
    }
  }
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
  @media (max-width: 1400px) {
    height: 800px;
    padding: 100px 40px 200px 0;
  }
  @media (max-width: 1200px) {
    height: 600px;
  }
  @media (max-width: 950px) {
    height: 500px;
    h1 {
      font-size: 28px;
    }
    h6 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
      width: 300px;

      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 750px) {
    width: 100%;
    padding: 40px;
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
  @media (max-width: 1400px) {
    padding: 40px 55px 0 55px;
  }
  @media (max-width: 1200px) {
    padding: 40px 20px 0 20px;
  }
  @media (max-width: 950px) {
    padding: 20px 10px 0 10px;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    align-items: center;
  }
`;

const Image = styled.div`
  width: 395px;
  height: 420px;
  border-radius: 20px;
  background-image: url(${(Props) => Props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1400px) {
    width: 350px;
    height: 373px;
  }
  @media (max-width: 1200px) {
    max-width: 300px;
    max-height: 319px;
  }
  @media (max-width: 950px) {
    max-width: 250px;
    max-height: 265px;
  }
  @media (max-width: 750px) {
    width: 300px;
    height: 319px;
  }
`;

const MainImg = styled.img`
  max-width: 741px;
  max-height: 893px;
  @media (max-width: 1400px) {
    max-width: 600px;
    max-height: 700px;
  }
  @media (max-width: 1200px) {
    max-width: 400px;
    max-height: 500px;
  }
  @media (max-width: 950px) {
    max-width: 300px;
    max-height: 400px;
  }
  @media (max-width: 750px) {
    max-width: 400px;
    max-height: 550px;
  }
`;
