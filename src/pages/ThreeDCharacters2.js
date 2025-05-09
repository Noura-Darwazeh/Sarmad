import React from "react";

import styled from "styled-components";
import AssetsCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar";
import SaudiGirl from "../assets/threeDCharacters/SaudiGirl.png";
import SaudiMan2 from "../assets/threeDCharacters/SaudiMan2.png";
import EgyptianMan from "../assets/threeDCharacters/EgyptianMan.png";
import EgyptianGirl from "../assets/threeDCharacters/EgyptianGirl.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  padding-right: 75px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    padding-right: 30px;
  }

  @media (max-width: 600px) {
    padding-right: 15px;
    margin-top: 20px;
  }
`;

const ContainerCardsSidebar = styled.div`
  display: flex;
  direction: rtl;
  gap: 56px;
  margin-top: 45px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export function ThreeDCharacters2() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <MadeByUs />
      <Imagee />

      <PageContainer>
        <h2>بيئات ثلاثية الأبعاد</h2>
        <ContainerCardsSidebar>
          <Sidebar />
          <Cards>
            <AssetsCard
              innerImage={EgyptianMan}
              title="الرجل المصري"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              onClick={() => navigate("/view?id=2")}
            />

            <AssetsCard
              innerImage={SaudiMan2}
              title="الرجل السعودي"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={SaudiGirl}
              title="الفتاة السعودية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={EgyptianGirl}
              title="الفتاة المصرية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
          </Cards>
        </ContainerCardsSidebar>
      </PageContainer>
    </div>
  );
}
