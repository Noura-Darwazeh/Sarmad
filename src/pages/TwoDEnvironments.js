import React from "react";
import styled from "styled-components";

import WeaponCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar";
import RamadanEnvironment from "../assets/twoDEnvironment/RamadanEnvironment.png";
import PalestinianEnvironment from "../assets/twoDEnvironment/PalestinianEnvironment.png";
import YemeniEnvironment from "../assets/twoDEnvironment/YemeniEnvironment.png";
import MoroccanEnvironment from "../assets/twoDEnvironment/MoroccanEnvironment.png";
import BedouinEnvironment from "../assets/twoDEnvironment/BedouinEnvironment.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";

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

function TwoDEnvironments() {
  return (
    <div className="container">
      <MadeByUs />
      <Imagee />

      <PageContainer>
        <h2>أسلحة ثنائية الأبعاد</h2>
        <ContainerCardsSidebar>
          <Sidebar />
          <Cards>
            <WeaponCard
              innerImage={YemeniEnvironment}
              title="البيئة اليمنية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={RamadanEnvironment}
              title="البيئة الرمضانية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={PalestinianEnvironment}
              title="البيئة الفلسطينية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={MoroccanEnvironment}
              title="البيئة المغربية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={BedouinEnvironment}
              title="البيئة البدوية"
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

export default TwoDEnvironments;
