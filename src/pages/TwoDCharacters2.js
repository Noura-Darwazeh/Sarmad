import React from "react";
import styled from "styled-components";

import WeaponCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar2";
import MoroccanMan from "../assets/twoDCharacters/MoroccanMan.png";
import MoroccanGirl from "../assets/twoDCharacters/MoroccanGirl.png";
import YemeniMan from "../assets/twoDCharacters/YemeniMan.png";
import YemeniGirl from "../assets/twoDCharacters/YemeniGirl.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";
import twoDCharacters from "../assets/twoDCharacters/twoDCharacters.png"
import Pagination from "../components/Pagination ";

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

function TwoDCharacters2() {
  return (
    <div className="container">
      <MadeByUs />
      <Imagee src={twoDCharacters} />

      <PageContainer>
        <h2>شخصيات ثنائية الأبعاد</h2>
        <ContainerCardsSidebar>
          <Sidebar />
          <Cards>
            <WeaponCard
              innerImage={YemeniMan}
              title="الرجل اليمني"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={MoroccanMan}
              title="الرجل المغربي"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={MoroccanGirl}
              title="الفتاة المغربية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={YemeniGirl}
              title="الفتاة اليمنية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
          </Cards>
        </ContainerCardsSidebar>
      </PageContainer>
      <Pagination />
    </div>
  );
}

export default TwoDCharacters2;
