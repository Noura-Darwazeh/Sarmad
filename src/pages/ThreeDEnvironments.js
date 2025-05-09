import React from "react";
import styled from "styled-components";

import AssetsCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar";
import SyrianEnvironment from "../assets/threeDEnvironment/SyrianEnvironment.png";
import SaudiEnvironment from "../assets/threeDEnvironment/SaudiEnvironment.png";
import EgyptianEnvironment from "../assets/threeDEnvironment/EgyptianEnvironment.png";
import JordanianEnvironment from "../assets/threeDEnvironment/JordanianEnvironment.png";
import WarEnvironment from "../assets/threeDEnvironment/WarEnvironment.png";
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

function ThreeDEnvironments() {
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
              innerImage={EgyptianEnvironment}
              title="البيئة المصرية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              onClick={() => navigate("/view?id=2")}
            />

            <AssetsCard
              innerImage={SaudiEnvironment}
              title="البيئة السعودية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={SyrianEnvironment}
              title="البيئة السورية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <AssetsCard
              innerImage={JordanianEnvironment}
              title="البيئة الأردنية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={WarEnvironment}
              title="البيئة الحربية"
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

export default ThreeDEnvironments;
