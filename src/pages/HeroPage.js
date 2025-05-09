import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/heroPage/Hero_Page_Saramd.png";
import playCircle from "../assets/heroPage/Play circle.png";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled.div`
  background-size: cover;
  background-position: center;
  height: 100vh;
  direction: rtl;
  display: flex;
  align-items: center;
  padding: 0 88px;
  color: ${(props) => props.theme.colors.white};
  background-image: url(${backgroundImage});

  @media (max-width: 426px) {
    padding: 0 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;

  @media (max-width: 426px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  max-width: 300px;

  @media (max-width: 426px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 24px;

  @media (max-width: 426px) {
    font-size: 18px;
  }
`;

const PrimaryButton = styled.button`
  background-color: rgb(161, 153, 251);
  border: none;
  padding: 6px 71px;
  font-size: 24px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-top: 69px;
  @media (max-width: 426px) {
    font-size: 18px;
    padding: 6px 40px;
  }
`;

const HeroButtons = styled.div`
  margin-top: 76px;

  @media (max-width: 426px) {
    margin-top: 40px;
  }
`;

const VideoLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;

  @media (max-width: 426px) {
    flex-direction: column;
    text-align: center;
  }
`;

const VideoText = styled.span`
  font-size: 24px;

  @media (max-width: 426px) {
    font-size: 18px;
  }
`;

const Line = styled.div`
  width: 144px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 426px) {
    width: 100px;
    margin: 10px 0;
  }
`;

export const HeroPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/log-in");
  };
  return (
    <HeroContainer>
      <HeroContent>
        <Title>مرحباً بك في سرمد</Title>
        <Description>
          منصتك المتكاملة لتصميم الأشكال العربية. شخصيات، بيئات، وعناصر مشاهد
          الرسوم المتحركة.
        </Description>

        <PrimaryButton onClick={handleStartClick}>بدء الاستخدام</PrimaryButton>
        <HeroButtons>
          <VideoLink href="#">
            <VideoText>شاهد الفيديو</VideoText>
            <img
              src={playCircle}
              alt="Play Icon"
              style={{
                width: "57px",
                height: "57px",
                marginRight: "8px",
                marginLeft: "8px",
                verticalAlign: "middle",
              }}
            />
            <Line />
          </VideoLink>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};
