import React from "react";
import styled from "styled-components";
import WeaponCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar2";
import RamadanMan from "../assets/twoDCharacters/RamadanMan.png";
import PalestinianMan from "../assets/twoDCharacters/PalestinianMan.png";
import BedouinMan from "../assets/twoDCharacters/BedouinMan.png";
import BedouinGirl from "../assets/twoDCharacters/BedouinGirl.png";
import RamadanGirl from "../assets/twoDCharacters/RamadanGirl.png";
import PalestinianGirl from "../assets/twoDCharacters/PalestinianGirl.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";
import Pagination from "../components/Pagination ";
import twoDCharacters from "../assets/twoDCharacters/twoDCharacters.png";
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

function TwoDCharacters1() {
  const navigate = useNavigate();
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
              innerImage={BedouinMan}
              title="الرجل البدوي"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              onClick={() => navigate("/view?id=5")}
            />

            <WeaponCard
              innerImage={RamadanMan}
              title="الرجل الرمضاني"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={PalestinianMan}
              title="الرجل الفلسطيني"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={BedouinGirl}
              title="الفتاة البدوية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={RamadanGirl}
              title="الفتاة الرمضانية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={PalestinianGirl}
              title="الفتاة الفلسطينية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
          </Cards>
        </ContainerCardsSidebar>
      </PageContainer>
      <Pagination pages={["two-d-characters1", "two-d-characters2"]} />
    </div>
  );
}

export default TwoDCharacters1;
