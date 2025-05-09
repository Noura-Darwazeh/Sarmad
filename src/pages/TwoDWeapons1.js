import React from "react";
import styled from "styled-components";
import AssetsCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar";
import sword from "../assets/twoDWeapons/sword2.png";
import gun from "../assets/twoDWeapons/gun.png";
import dagger from "../assets/twoDWeapons/dagger.png";
import hammer from "../assets/twoDWeapons/hammer.png";
import antiqueDagger from "../assets/twoDWeapons/antiqueDagger.png";
import combTheGround from "../assets/twoDWeapons/combTheGround.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";
import twoDWeapons from "../assets/twoDWeapons/twoDWeapons.png";
import Pagination from "../components/Pagination ";
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

export function TwoDWeapons1() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <MadeByUs />
      <Imagee src={twoDWeapons} />

      <PageContainer>
        <h2>أسلحة ثنائية الأبعاد</h2>
        <ContainerCardsSidebar>
          <Sidebar />
          <Cards>
            <AssetsCard
              innerImage={hammer}
              title="مطرقة"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              // onClick={() => navigate("/view?id=2")}
            />

            <AssetsCard
              innerImage={gun}
              title="بارودة"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={sword}
              title="سيف"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <AssetsCard
              innerImage={antiqueDagger}
              title="خنجر أثري"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              onClick={() => navigate("/view?id=4")}

            />
            <AssetsCard
              innerImage={combTheGround}
              title="مشط الأرض"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <AssetsCard
              innerImage={dagger}
              title="الجنبية"
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
