import React from "react";
import styled from "styled-components";
import check from "../assets/homePage/Check circle.png";

const Section = styled.section`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.colors.white};

  min-height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 100px;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 60px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }

  @media (max-width: 320px) {
    padding: 30px 10px;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;

  p {
    font-size: 24px;
    margin: 30px 0;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin: 20px 0;
    }

    @media (max-width: 320px) {
      font-size: 16px;
      margin: 15px 0;
    }
  }
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: 700;
  text-align: right;
  margin-bottom: 5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }

  @media (max-width: 320px) {
    font-size: 26px;
  }
`;

const CTAButton = styled.button`
  background-color: #a6a0ed;
  width: 308px;
  height: 73px;
  color: ${(props) => props.theme.colors.white};

  font-size: 24px;
  padding: 3px 10px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 12px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
    padding: 10px;
  }
`;

const SubtitleCheck = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  opacity: 0.9;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 768px) {
    font-size: 18px;
    bottom: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    gap: 6px;
    bottom: 10px;
  }

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 320px) {
      width: 18px;
      height: 18px;
    }
  }
`;

const GameAdSection = ({
  title,
  buttonText,
  subtitle,
  backgroundImage,
  desc,
  subtitleIcon,
}) => {
  return (
    <Section style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <Content>
        <Title>{title}</Title>
        {desc && <p>{desc}</p>}
        <CTAButton>{buttonText}</CTAButton>
      </Content>
      <SubtitleCheck>
        {subtitleIcon && <img src={subtitleIcon} alt="subtitle icon" />}
        {subtitle && <p>{subtitle}</p>}
      </SubtitleCheck>
    </Section>
  );
};

export default GameAdSection;
