import React from "react";
import styled from "styled-components";
import GameAdSection from "../components/GameAdSection";
import hero1 from "../assets/homePage/hero1.png";
import egybman from "../assets/homePage/Frame 3495.png";
import hero2 from "../assets/homePage/hero2.png";
import asol from "../assets/homePage/asol.png";
import hero3 from "../assets/homePage/hero3.png";
import asol2 from "../assets/homePage/asol2.png";
import hero4 from "../assets/homePage/hero4.png";
import check from "../assets/homePage/Check circle.png";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  direction: rtl;
`;

const SectionTitle = styled.h1`
  text-align: right;
  font-size: 60px;
  margin-right: 80px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 900px) {
    font-size: 48px;
    margin-right: 40px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    margin-right: 20px;
    text-align: center;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 600px) {
    max-height: 250px;
    object-fit: contain;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <GameAdSection
        title="هذا وقتك! صمم لعبتك الان"
        buttonText="معرفة المزيد"
        subtitle="كل الأصول صنعت بواسطتنا"
        backgroundImage={hero1}
        subtitleIcon={check}
      />

      <SectionTitle>افضل التخفيضات!</SectionTitle>
      <FullWidthImage src={egybman} alt="egyptian banner" />

      <GameAdSection
        title="اكتشف لعبة الشهر!"
        desc="تعرف على أفضل الألعاب العربية في الوطن العربي "
        buttonText="اضغط هنا"
        backgroundImage={hero2}
        onClick={() => navigate("/month-game")}
      />
      <FullWidthImage src={asol} alt="asol" />

      <GameAdSection
        title="اعثر على أحدث وأفضل ألعاب الأصول هنا!"
        desc="تعرف على أفضل ألعاب الأصول"
        buttonText="اضغط هنا"
        backgroundImage={hero3}
      />

      <FullWidthImage src={asol2} alt="asol2" />
      <GameAdSection
        title="قم بتصميم شخصيتك حسب ذوقك"
        desc="تعرف على ستايليستا الان"
        buttonText="اضغط هنا"
        backgroundImage={hero4}
      />
    </PageContainer>
  );
};

export default HomePage;
