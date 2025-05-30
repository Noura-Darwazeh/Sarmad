import React from "react";
import styled from "styled-components";
import AssetsCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar2";
import stick from "../assets/twoDWeapons/stick.png";
import knife from "../assets/twoDWeapons/knife.png";
import ax from "../assets/twoDWeapons/ax.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";
import twoDWeaponsImage from "../assets/twoDWeapons/twoDWeapons.png";
import { useNavigate } from "react-router-dom";
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

export function TwoDWeapons2() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <MadeByUs />
      <Imagee src={twoDWeaponsImage} />

      <PageContainer>
        <h2>أسلحة ثنائية الأبعاد</h2>
        <ContainerCardsSidebar>
          <Sidebar />
          <Cards>
            <AssetsCard
              innerImage={ax}
              title="بلطة"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              onClick={() => navigate("/view?id=2")}
            />

            <AssetsCard
              innerImage={knife}
              title="سكين"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={stick}
              title="عصا"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
          </Cards>
        </ContainerCardsSidebar>
      </PageContainer>
      <Pagination pages={["two-d-weapons1", "two-d-weapons2"]} />
    </div>
  );
}
